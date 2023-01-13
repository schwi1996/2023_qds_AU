## VERSIFY - Access the most popular songs from Korea, Japan, and China!

* [General info](#general-info)
* [Technologies](#technologies)
* [Contents](#content)


## General Info
Welcome to iinsight! iinsight is an app to help educators manage their data and save time. iinsight allows educators to sync data between devices, quickly take notes, and capture pictures all in the app, and this is just the tip of the iceberg!
	
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
├── script.txt        # The script from our presentation
└── README.md         # This file


It has the following subfolders and files:
├── .git                            # Folder for git repo
├── img                             # Folder for images
    /spotify.png                    # Pink spotify logo which takes you back to home page
    /target.svg                     # Appears on the songs page when you play an embed


├── pages                    # Folder for pages
    /main.html               # Where user is redirected and provided the options to shuffle or choose a language
    /shuffledplay.html       # Where user is randomly given a song and can choose to shuffle
    /songs.html              # Where user can choose a language and how to sort the songs
    /template.html           # Template we based the other pages on


├── scripts                  # folder for scripts
    /main.js                 # script for the typing/scrolling feature on the main page
    /scrolltopbutton.js      # script for button which returns you to the top of the page
    /shuffledplay.js         # script that allows you to randomly select a new song
    /songs.js                # script that filters and displays the embeds for the top 50 songs of each language
    /writeToDB.js            # script that took the CSV and wrote the songs' data to firestore


├── styles                   # Folder for styles
    /main.css                # styling for the main page
    /shuffledplay.css        # styling for the shuffle play page
    /songs.css               # styling for the songs page and for the embeds


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
* Helen Liu - 
* Mina Park - 

## Acknowledgements 
* <a href="https://firebase.google.com/">Firebase</a>
* <a href="https://svgrepo.com/">SVG repo</a> 
* <a href="https://getbootstrap.com/">Bootstrap</a>

