
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


var iframe;

var current;

var sortBy = "topcharts";
var language = "Korean";



// Injects a single card into the gallery
function displayCard(index, nonTranslated, translated, embed) {

    let newCard = cardTemplate.content.cloneNode(true);

    if (nonTranslated == translated)
        newCard.querySelector('.card-title').innerHTML = nonTranslated;
    else
        newCard.querySelector('.card-title').innerHTML = nonTranslated + " - " + translated;

    // newCard.querySelector('.spotify-embed').src = embed;
    
    gallery.appendChild(newCard);

    manageEmbed(newCard, index, embed);

}

function manageEmbed(element, index, embed) {

    let options = {
        uri: embed
    };
    let callback = (EmbedController) => {
        
        EmbedController.addListener('playback_update', e => {

            var button = document.getElementById("scrollCurrentButton");

            if (!e.data.isPaused) {

                current = index;
                console.log(current);
                button.style.display = "block";

            } else {

                button.style.display = "none";

            }

            if (e.data.position == e.data.duration) {

                current = null;

            }

        });
        
    };
    
    iframe.createController(document.getElementById("embed"), options, callback);
    
}

function displaySongs() {

    gallery.innerHTML = "";

    var value;
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

        default:
            console.log("Try a for loop");
            break;

    }

    // Loads in the cards when the user first initializes the page
    db.collection("songs")
    .where("language", "==", language)
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

function setFilter(type, value) {

    if (type == "sortby") {

        sortBy = value;

    } else if (type == "language") {

        language = value;

    }

    console.log(sortBy);
    console.log(language);

}


function returnToCurrent() {

    gallery.children[current].scrollIntoView();
    
}

window.onSpotifyIframeApiReady = (IFrameAPI) => {

    iframe = IFrameAPI;
    displaySongs();

};

