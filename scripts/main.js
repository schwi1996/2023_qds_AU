const clickChinese = document.getElementById('Chinese');
const clickKorean = document.getElementById('Korean');
const clickJapanese = document.getElementById('Japanese');

clickChinese.addEventListener('click', displaySong);
clickKorean.addEventListener('click', displaySong);
clickJapanese.addEventListener('click', displaySong);

function displaySong() {
    window.location.href = "./play.html";
}



