var cardTitle = document.getElementById("card-title");

// var embed = document.getElementById("embed");

var button = document.getElementById("find");

var randomIndex;

var iframe;

window.onSpotifyIframeApiReady = (IFrameAPI) => {
    
    iframe = IFrameAPI;
    loadNewSong();

};


function loadNewSong() {

    randomIndex = Math.floor((Math.random() * 150) + 1);
    
    db.collection("songs")
    .where("songid", "==", randomIndex)
    .get()
    .then(songs => {

        songs.forEach(song => {

            if (song.data().title == song.data().translation)
                cardTitle.textContent = song.data().title;
            else
                cardTitle.textContent = song.data().title + " - " + song.data().translation;


            var embed = document.createElement("iframe");
            document.getElementById("card-body").appendChild(embed);

            let options = {
                uri: song.data().embed,
                width: "100%",
                height: 352,
                frameBorder: 0,
                allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture",
                loading: "lazy"
              };
            let callback = (EmbedController) => {

                button.addEventListener('click', () => {

                    EmbedController.destroy();

                });

            };
            iframe.createController(embed, options, callback);

        });

    });

}


