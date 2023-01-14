// Uses a FileReader to read from the CSV file
function readFile() {

    var reader = new FileReader();

    reader.addEventListener("load", () => {

        writeToDB(reader.result);

    }, false);

    reader.readAsText(document.getElementById("csvFile").files[0]);

}

// Writes the contents of the CSV file to Firestore
function writeToDB(songs) {

    let idCount = 0;

    let records = songs.split("\n");

    // For each song...
    records.forEach((record) => {

        let fields = record.split(",");

        // Creates a new document
        db.collection("songs").add({
            songid: idCount,
            placement: fields[0],
            title: fields[1],
            translation: fields[2],
            artist: fields[3],
            year: fields[4],
            language: fields[5],
            plays: fields[6],
            embed: fields[7]
        })

        idCount++;

    });

}

// Converts String values in Firestore to integers
function convertToInt() {

    db.collection("songs")
        .get()
        .then(songs => {

            songs.forEach(song => {

                var intVersion = parseInt(song.data().plays);

                db.collection("songs").doc(song.id).update({

                    plays: intVersion

                });

            });

        });

}
