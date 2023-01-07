
// Locates the div container that holds the gallery
var gallery = document.getElementById('gallery');

// Locates the template for the cards
var cardTemplate = document.getElementById("cardTemplate");


// Injects a single card into the gallery
function displayCard(idIndex, nonTranslated, translated, spotify) {

    let newCard = cardTemplate.content.cloneNode(true);

    newCard.id = "card" + idIndex;

    newCard.querySelector('.card-title').innerHTML = nonTranslated + " - " + translated;

    gallery.appendChild(newCard);

}

function displaySongs() {

    for (let i = 0; i < 10; i++) {
        
        displayCard(i, "Card " + i, "XXX " + i);
    
    }

}

    

