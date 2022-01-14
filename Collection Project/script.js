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

/* Tried to create this with a for loop */

for (i = 0; i < collection.length; i++) {
    const createDiv1 = document.createElement("div");
    document.body.appendChild(createDiv1);

    const createDivContainer1 = document.createElement("container");
    document.body.appendChild(createDivContainer1);

    const Div = document.createElement("div.albumName");
    Div.className = "albumName";
    const Div1 = document.createElement("div.artistName");
    Div1.className = "artistName";
    const Div2 = document.createElement("div.releaseYear");
    Div2.className = "releaseYear";
    const Div3 = document.createElement("div.genre");
    Div3.className = "genre";
    const Div4 = document.createElement("div.albumArtwork");
    Div4.className = "albumArtwork";
    const Div5 = document.createElement("div.albumLabel");
    Div5.className = "albumLabel";
    const Div6 = document.createElement("div.albumCountryOfOrigin");
    Div6.className = "CountryOfOrigin";


    createDiv1.append(Div, Div1, Div2, Div3, Div4, Div5, Div6);
    createDivContainer1.append(createDiv1);
}

// TODO: set a class for one container

let test100 = document.createElement('div');
document.body.appendChild(test100);
test100.className = "hello";
for (i = 0; i < 1; i++) {
let x = document.createTextNode(collection[3].albumName);
test100.appendChild(x);

}

for (i = 0; i < 1; i++) {
    let x = document.createTextNode(collection[0].albumName);
    let y = document.getElementsByTagName("div.albumName");
    y.appendChild(x);
}

// TODO: try to get something in there
// TODO: get the correct info in there




/* const test2 = document.collection[0].genre[0];
console.log(test2); */


// A similar method would be:

collection.forEach((album) => {
    console.log(album.genre);
})

const hello = document.getElementById("123");
hello.classList.add = "test";

// TODO: 1. function (grab collection) 2. for collection[i] 3.grab collection[1].albumName 4.insert as InnerHTML

/* console.log(collection.albumName[0]); */