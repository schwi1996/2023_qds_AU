/* assign button id to variable */
let mybutton = document.getElementById("scrollTopButton");

/* show button when user scrolls down */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/* scroll to top when user clicks button */
function topFunction() {
  document.documentElement.scrollTop = 0;
}