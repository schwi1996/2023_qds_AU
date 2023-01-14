## VERSIFY - Access the most popular songs from Korea, Japan, and China!

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)


## General Info
Welcome to Versify! Have you ever listened to a song but it's in a language other than English? Or you just want to explore songs in a different language? Versify provides the most popular songs of the year in foreign languages for your enjoyment!
	
## Technologies
Technologies used for this project:
* HTML, CSS
* JavaScript
* Bootstrap 
* Firebase and Firestore
	
## Content
Content of the project folder:

```
 Top level of project folder: 
├── .gitignore        # Git ignore file
├── index.html        # Landing page, automatically redirects to welcome.html
├── 404.html          # 404, if page is not found
├── script.txt        # Script from our presentation
└── README.md         # This file


It has the following subfolders and files:
├── .git                            # Folder for git repo
├── img                             # Folder for images
    /spotify.png                    # Pink spotify logo which takes you back to the home page
    /target.svg                     # Target which appears on the songs page, when you play an embed


├── pages                    # Folder for pages
    /main.html               # Page where user can redirect to shuffledplay.html or songs.html
    /shuffledplay.html       # Page that gives the user a random song and the option to shuffle to a new random song
    /songs.html              # Page with filters to choose a language and order the songs
    /template.html           # Page template for other pages


├── scripts                  # Folder for scripts
    /main.js                 # Displays scrolling feature on the main page
    /scrolltopbutton.js      # Adds button which returns you to the top of the page
    /shuffledplay.js         # Displays embed for a random song and allows you to reshuffle for a new song
    /songs.js                # Lists 50 songs and provides language/order filters
    /writeToDB.js            # Reads from a CSV and writes the data to Firestore


├── styles                   # Folder for styles
    /main.css                # Styling for the main page
    /shuffledplay.css        # Styling for the shuffle play page
    /songs.css               # Styling for the songs page and for the embeds


Firebase hosting files: 
├── .firebase
	/hosting..cache
├── .firebaserc
├── firebase.json


```

## Resources
- In-app icons from svgrepo (https://svgrepo.com/)

## Contact 
* Kate Zraly - https://github.com/katelylynn
* Ozan Yurtisigi - https://github.com/OzanYRT
* Helen Liu - https://github.com/schwi1996
* Mina Park - https://github.com/sunminpark94

## Acknowledgements 
* <a href="https://firebase.google.com/">Firebase</a>
* <a href="https://svgrepo.com/">SVG repo</a> 
* <a href="https://getbootstrap.com/">Bootstrap</a>

