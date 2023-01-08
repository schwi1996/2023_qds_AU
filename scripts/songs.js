
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


var iframe;

var current;



// Injects a single card into the gallery
function displayCard(index, nonTranslated, translated, embed) {

    let newCard = cardTemplate.content.cloneNode(true);

    if (nonTranslated == translated)
        newCard.querySelector('.card-title').innerHTML = nonTranslated;
    else
        newCard.querySelector('.card-title').innerHTML = nonTranslated + " - " + translated;

    // newCard.querySelector('.spotify-embed').src = embed;
    
    gallery.appendChild(newCard);

    manageEmbed(newCard, index);

}

function manageEmbed(element, index) {

    let options = {
        uri: 'spotify:track:5QDLhrAOJJdNAmCTJ8xMyW'
    };
    let callback = (EmbedController) => {
        
        EmbedController.addListener('playback_update', e => {

            console.log(e);

            if (!e.data.isPaused) {

                current = index;
                console.log(current);

            }

            if (e.data.position == e.data.duration) {

                current = null;

            }

        });
        
    };
    
    iframe.createController(document.getElementById("embed"), options, callback);
    
}

function displaySongs() {

    // Loads in the cards when the user first initializes the page
    db.collection("songs")
        .where("language", "==", "Korean")
        .limit(10)
        .get()
        .then(songs => {

            var i = 0;

            songs.forEach(song => {

                displayCard(i, song.data().title, song.data().translation, song.data().embed);

                i++;

            });

        });

}

function returnToCurrent() {

    gallery.children[current].scrollIntoView();
    
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {

    iframe = IFrameAPI;
    displaySongs();

};

