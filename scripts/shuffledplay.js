// Retrieves HTML song title
var cardTitle = document.getElementById("card-title");

// Retrieves the "Shuffle!" button
var button = document.getElementById("find");



var iframe;


// Displays only when the iframe is ready
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    
    iframe = IFrameAPI;
    loadNewSong();

};


// Selects a random song out of the 150 in Firestore
function loadNewSong() {

    var randomIndex = Math.floor((Math.random() * 150) + 1);
    
    db.collection("songs")
    .where("songid", "==", randomIndex)
    .get()
    .then(songs => {

        songs.forEach(song => {

            // Display song name only once if song title is in English
            if (song.data().title == song.data().translation)
                cardTitle.textContent = song.data().title;
            else
                cardTitle.textContent = song.data().title + " - " + song.data().translation;

            // Creates the embed for the newly chosen song
            var embed = document.createElement("iframe");
            document.getElementById("card-body").appendChild(embed);

            // Sets the configuration for the embed
            let options = {
                uri: song.data().embed,
                width: "100%",
                height: 352,
                frameBorder: 0,
                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                loading: "lazy"
              };

            // Called after controller is created
            let callback = (EmbedController) => {

                button.addEventListener('click', () => {

                    EmbedController.destroy();

                });

            };

            iframe.createController(embed, options, callback);

        });

    });

}


