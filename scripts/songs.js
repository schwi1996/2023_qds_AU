
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


// Injects a single card into the gallery
function displayCard(idIndex, cardTitle) {

    let newCard = cardTemplate.content.cloneNode(true);

    newCard.id = "card" + idIndex;

    newCard.querySelector('.card-title').innerHTML = cardTitle;

    gallery.appendChild(newCard);

}

function displaySongs() {

    
    for (let i = 0; i < 10; i++) {

        displayCard(i, "Card " + i);
    
    }

}

displaySongs();

