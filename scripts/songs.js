
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


// Injects a single card into the gallery
function displayCard(idIndex, nonTranslated, translated) {

    let newCard = cardTemplate.content.cloneNode(true);

    newCard.id = "card" + idIndex;

    if (nonTranslated == translated)
        newCard.querySelector('.card-title').innerHTML = nonTranslated;
    else
        newCard.querySelector('.card-title').innerHTML = nonTranslated + " - " + translated;

    newCard.querySelector('.spotify-embed').src = "https://open.spotify.com/embed/track/5QDLhrAOJJdNAmCTJ8xMyW?utm_source=generator&theme=0";

    gallery.appendChild(newCard);

}

function displaySongs() {

    // Loads in the cards when the user first initializes the page
    db.collection("songs")
    //.where("language", "==", "Korean")
    .get()
        .then(songs => {

            songs.forEach(song => {

                displayCard(song.data().songid, song.data().title, song.data().translation);

            });

        });

}

displaySongs();    

