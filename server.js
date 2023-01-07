
// REQUIRES
const express = require("express");
const app = express();
app.use(express.json());
const fs = require("fs");

// Mapping file system paths to the app's virtual paths
app.use("/js", express.static("./public/js"));
app.use("/css", express.static("./public/css"));
app.use("/img", express.static("./public/img"));

app.get("/", function (req, res) {
    // retrieve and send an HTML document from the file system
    let doc = fs.readFileSync("./app/html/index.html", "utf8");
    res.send(doc);
});



fs.createReadStream("app/data/AllDataCombined.csv", { encoding: "utf-8" })

    .on("data", (chunk) => {
        console.log(chunk);
    })
    .on("error", (error) => {
        console.log(error);
    });



// for resource not found (i.e., 404)
app.use(function (req, res) {
    res.status(404).send("<html><head><title>Page not found!</title></head><body><p>Nothing here.</p></body></html>");
});

// RUN SERVER
let port = 8000;
app.listen(port, function () {
    console.log("Example app listening on port " + port + "!");
});