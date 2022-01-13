const collection = [{
        albumName: 'Fantastic Planet',
        artistName: 'Lealani',
        releaseYear: '2019',
        genre: ['electronic', 'experimental electronic', 'experimental hip-hop', 'pop', 'synthpop', 'triphop', 'Los Angeles'],
        albumArtwork: 'fantastic-planet.jpg',
        albumLabel: 'Dome of Doom',
        albumCountryOfOrigin: 'USA'
    },
    {
        albumName: 'Slide',
        artistName: 'George Clanton',
        releaseYear: '2018',
        genre: ['electronic', 'baggy', 'chillwave', 'hypnogogic pop', 'vaporwave', 'Los Angeles'],
        albumArtwork: 'slide.jpg',
        albumLabel: '100% Electronica',
        albumCountryOfOrigin: 'USA'
    },
    {
        albumName: 'Suddenly Everyone Explodes',
        artistName: 'Plastic Mermaids',
        releaseYear: '2019',
        genre: ['dream pop', 'shoegaze', 'experimental', 'indie-rock'],
        albumArtwork: 'suddenly-everyone-explodes.jpg',
        albumLabel: 'Sunday Best Recordings',
        albumCountryOfOrigin: 'UK'
    },
    {
        albumName: 'Callisto',
        artistName: 'Robotalco',
        releaseYear: '2019',
        genre: ['electronic', 'balearic', 'disco', 'dub', 'house', 'Italy'],
        albumArtwork: 'callisto.jpg',
        albumLabel: 'Silk Sound',
        albumCountryOfOrigin: 'Italy'
    },
    {
        albumName: 'Reckoning',
        artistName: 'Mourning [A] BLKstar',
        releaseYear: '2019',
        genre: ['experimental', 'afrofuturism', 'beats', 'electronic music', 'soul', 'Cleveland'],
        albumArtwork: 'reckoning.jpg',
        albumLabel: 'Don Giovanni Records',
        albumCountryOfOrigin: 'USA'
    }
]

/* Tried to create this with a for loop but didn't really work.  */
for (i = 0; i < collection.length; i++) {
    const createDiv1 = document.createElement("div");
    document.body.appendChild(createDiv1);

    const createDivContainer1 = document.createElement("container");
    document.body.appendChild(createDivContainer1);

    const Div = document.createElement("div.albumName");
    const Div1 = document.createElement("div.artistName");
    const Div2 = document.createElement("div.releaseYear");
    const Div3 = document.createElement("div.genre");
    const Div4 = document.createElement("div.albumArtwork");
    const Div5 = document.createElement("div.albumLabel");
    const Div6 = document.createElement("div.albumCountryOfOrigin");


    createDiv1.append(Div, Div1, Div2, Div3, Div4, Div5, Div6);
    createDivContainer1.append(createDiv1);
}
for (i = 0; i < 1; i ++) {
getSecondGenre = document.write (collection[0].genre[1]);
}

// A similar method would be:

collection.forEach((album) => {
    console.log(album.genre);
})

// TODO: 1. function (grab collection) 2. for collection[i] 3.grab collection[1].albumName 4.insert as InnerHTML


/*     collection.forEach((album) => {
        document.body.appendChild(album.albumName)
    }) */

// trying to get my array items into the right spot.

collection.forEach((album) => {
const albumName1 = document.querySelector("albumName");
console.log (albumName1);
albumName1.albumName === album.albumName;
console.log(albumName1.albumName);
    })

/* getLabel1.insertBefore(Div); */
/* for (i = 0; i < collection.length; i ++) {
console.log(collection[i].albumName);
const albumName1 = collection[1].albumName;
document.createAttribute()
} */



/* var h1 = document.getElementsByTagName("H1")[0];   // Get the first <h1> element in the document
var att = document.createAttribute("class");       // Create a "class" attribute
att.value = "democlass";                           // Set the value of the class attribute
h1.setAttributeNode(att);                          // Add the class attribute to <h1> */
// trying to get some response out of some elements

/* var selectAlbumName = document.getElementsByClassName("div.albumName");
for (i = 0; i < selectAlbumName.length; i++) {
    selectAlbumName[i].style.backgroundColor = "red";
    selectAlbumName[i].style.padding = "100px";
} */

/* let txt =" ";
for (i in collection) {
    txt += collection[i];
}
document.getElementsByClassName("albumName").innerHTML = txt; */
/* After the creation of an element, we can either use the appendChild() method or insertBefore() method to insert the created element in the document. */





/* 1. create const
2. create containers
3. append div into container div and then append element (img/p/...) into div
4. refer the properties to the content: 
let albumNameP = document.createElement ("p");

insertBefore & appendChild + createTextNode */