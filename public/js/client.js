// invoked when page is loaded and ready to begin
ready(function () {

    // when a user wants to request a file from the server
    // URL is the location we are requesting stuff from
    // callback is what happens once we get that stuff
    function ajaxGET(url, callback) {


        // makes a new HTTP request
        const xhr = new XMLHttpRequest();

        // once the server gets the request and sends stuff back
        xhr.onload = function () {

            // if the request is done and everything is okay
            if (this.readyState == XMLHttpRequest.DONE && this.status === 200) {

                // runs the callback function using the content from "this" (XMLHttpRequest)
                callback(this.responseText);

            } else {

                // quietly does nothing, only prints out the status
                console.log(this.status);

            }

        }

        // sets the content of the request. "hey, i want to get this"
        xhr.open("GET", url);

        // mails off the request
        xhr.send();

    }

});

// declares the callback function "ready"
function ready(callback) {

    if (document.readyState != "loading") {

        callback();

    } else {

        document.addEventListener("DOMContentLoaded", callback);

    }

}