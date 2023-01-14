
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


// The song the user is currently playing
var currentPlaying;


var iframe;


// Default filter values
var sortBy = "topcharts";
var language = document.getElementById("language");


// Get the URL String
var parameters = new URL(window.location.href);

// If the user selected a language from the main page, sets language variable to chosen language
if (parameters.searchParams.get("language")) {
    language.value = parameters.searchParams.get("language");
} else {
    language.value = "Korean";
}


// Displays the 50 songs only when the iframe is ready
window.onSpotifyIframeApiReady = (IFrameAPI) => {

    iframe = IFrameAPI;
    displaySongs();

};



// Injects a single card into the gallery
function displayCard(index, nonTranslated, translated, embed) {

    let newCard = cardTemplate.content.cloneNode(true);

    if (nonTranslated == translated)
        newCard.querySelector('.card-title').innerHTML = nonTranslated;
    else
        newCard.querySelector('.card-title').innerHTML = nonTranslated + " - " + translated;


    gallery.appendChild(newCard);

    manageEmbed(index, embed);

}

// Sets up the embed
function manageEmbed(index, embed) {

    let options = {
        uri: embed
    };
    let callback = (EmbedController) => {
        
        // Checks if embed is playing
        EmbedController.addListener('playback_update', e => {

            var button = document.getElementById("scrollCurrentButton");

            // If song is playing, set current to its index
            if (!e.data.isPaused) {

                currentPlaying = index;
                button.style.display = "block";

            } else {

                button.style.display = "none";

            }

            // If it reaches the end of the song, remove it from currentPlaying
            if (e.data.position == e.data.duration) {

                currentPlaying = null;
                button.style.display = "none";

            }

        });
        
    };
    
    iframe.createController(document.getElementById("embed"), options, callback);
    
}

// Displays the top 50 songs of a given language
function displaySongs() {

    sortBy = document.getElementById("sort-by").value;

    // Clears the gallery before generating 
    gallery.innerHTML = "";

    // What we retrieve from Firestore
    var value;

    // Ascending or descending
    var order;

    switch (sortBy) {

        case "mostplayed":
            value = "plays";
            order = "desc";
            break;

        case "leastplayed":
            value = "plays";
            order = "asc";
            break;

        case "topcharts":
            value = "placement";
            order = "asc";
            break;

    }

    // Loads in the cards when the user first initializes the page
    db.collection("songs")
    .where("language", "==", language.value)
    .orderBy(value, order)
    .get()
    .then(songs => {
        
        var i = 0;
        
        songs.forEach(song => {

                displayCard(i, song.data().title, song.data().translation, song.data().embed);

                i++;

            });

        });

}

// Returns user to the currently playing song
function returnToCurrentPlaying() {

    gallery.children[currentPlaying].scrollIntoView();
    
}


