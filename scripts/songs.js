
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


// Injects a single card into the gallery
function displayCard(idIndex, nonTranslated, translated, embed) {

    let newCard = cardTemplate.content.cloneNode(true);

    newCard.id = "card" + idIndex;

    if (nonTranslated == translated)
        newCard.querySelector('.card-title').innerHTML = nonTranslated;
    else
        newCard.querySelector('.card-title').innerHTML = nonTranslated + " - " + translated;

    newCard.querySelector('.spotify-embed').src = embed;

    gallery.appendChild(newCard);

}

function displaySongs() {

    // Loads in the cards when the user first initializes the page
    db.collection("songs")
    // .where("language", "==", "Korean")
    .get()
        .then(songs => {

            songs.forEach(song => {

                displayCard(song.data().songid, song.data().title, song.data().translation, song.data().embed);

            });

        });

}

displaySongs();    

