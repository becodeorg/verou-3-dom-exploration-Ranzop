const collection = [
    {
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
const createDiv1 = document.createElement ("div");
document.body.appendChild(createDiv1);

const createDivContainer1 = document.createElement("container");
document.body.appendChild(createDivContainer1);

const getDiv1 = document.getElementsByClassName("div");

const Div = document.createElement ("div.albumName");
const Div1 = document.createElement ("div.artistName");
const Div2 = document.createElement ("div.releaseYear");
const Div3 = document.createElement ("div.genre");
const Div4 = document.createElement ("div.albumArtwork");
const Div5 = document.createElement ("div.albumLabel");
const Div6 = document.createElement ("div.albumCountryOfOrigin");


createDiv1.append (Div, Div1, Div2, Div3, Div4, Div5, Div6);
createDivContainer1.append (createDiv1);

}

/* const createDiv2 = document.createElement ("div");
document.body.appendChild(createDiv2);

const createDivContainer2 = document.createElement("container");
document.body.appendChild(createDivContainer2);

const createDiv3 = document.createElement ("div");
document.body.appendChild(createDiv3);

const createDivContainer3 = document.createElement("container");
document.body.appendChild(createDivContainer3);

const createDiv4 = document.createElement ("div");
document.body.appendChild(createDiv4);

const createDivContainer4 = document.createElement("container");
document.body.appendChild(createDivContainer4);

const createDiv5 = document.createElement ("div");
document.body.appendChild(createDiv5);

const createDivContainer5 = document.createElement("container");
document.body.appendChild(createDivContainer5); */

// TODO: create 5x more divs inside the container.



/* After the creation of an element, we can either use the appendChild() method or insertBefore() method to insert the created element in the document. */





/* 1. create const
2. create containers
3. append div into container div and then append element (img/p/...) into div
4. refer the properties to the content: 
let albumNameP = document.createElement ("p");
albumName.innertext = albumName[i].albumName
insertBefore & appendChild + createTextNode */