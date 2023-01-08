function readFile() {

    var reader = new FileReader();
    
    reader.addEventListener("load", () => {
    
        writeToDB(reader.result);
    
    }, false);
    
    reader.readAsText(document.getElementById("csvFile").files[0]);

}

function writeToDB(songs) {

    let idCount = 0;

    let records = songs.split("\n");

    records.forEach((record) => {

        let fields = record.split(",");

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
