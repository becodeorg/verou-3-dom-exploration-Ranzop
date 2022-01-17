import {collection} from "./collection.js" 

/* Tried to create this with a for loop */

for (let i = 0; i < collection.length; i++) {
    const createDiv1 = document.createElement("div");
    document.body.appendChild(createDiv1);

    const createDivContainer1 = document.createElement("section");
    document.body.appendChild(createDivContainer1);

    const Div = document.createElement("div");
    Div.className = "albumName";
    const Div1 = document.createElement("div");
    Div1.className = "artistName";
    const Div2 = document.createElement("div");
    Div2.className = "releaseYear";
    const Div3 = document.createElement("div");
    Div3.className = "genre";
    const Div4 = document.createElement("div");
    Div4.className = "albumArtwork";
    const Div5 = document.createElement("div");
    Div5.className = "albumLabel";
    const Div6 = document.createElement("div");
    Div6.className = "CountryOfOrigin";


    createDiv1.append(Div, Div1, Div2, Div3, Div4, Div5, Div6);
    createDivContainer1.append(createDiv1);
}

// TODO: set a class for one container

/* let test100 = document.createElement('div');
document.body.appendChild(test100);
test100.className = "hello";
for (let i = 0; i < 1; i++) {
    let x = document.createTextNode(collection[3].albumName);
    test100.appendChild(x);
} */

for (let i = 0; i < 1; i++) {
    let x1 = document.createTextNode(collection[0].albumName);
    let y1 = document.querySelector(".albumName");
    y1.appendChild(x1);


    let x2 = document.createTextNode(collection[1].albumName);
    let y2 = document.querySelectorAll(".albumName")[1];
    y2.appendChild(x2);


    let x3 = document.createTextNode(collection[2].albumName);
    let y3 = document.querySelectorAll(".albumName")[2];
    y3.appendChild(x3);


    let x4 = document.createTextNode(collection[3].albumName);
    let y4 = document.querySelectorAll(".albumName")[3];
    y4.appendChild(x4);


    let x5 = document.createTextNode(collection[4].albumName);
    let y5 = document.querySelectorAll(".albumName")[4];
    y5.appendChild(x5);
}
for (let i = 0; i < 1; i++) {
    let x1 = document.createTextNode(collection[0].artistName);
    let y1 = document.querySelector(".artistName");
    y1.appendChild(x1);


    let x2 = document.createTextNode(collection[1].artistName);
    let y2 = document.querySelectorAll(".artistName")[1];
    y2.appendChild(x2);


    let x3 = document.createTextNode(collection[2].artistName);
    let y3 = document.querySelectorAll(".artistName")[2];
    y3.appendChild(x3);


    let x4 = document.createTextNode(collection[3].artistName);
    let y4 = document.querySelectorAll(".artistName")[3];
    y4.appendChild(x4);


    let x5 = document.createTextNode(collection[4].artistName);
    let y5 = document.querySelectorAll(".artistName")[4];
    y5.appendChild(x5);
}

for (let i = 0; i < 1; i++) {
    let x1 = document.createTextNode(collection[0].releaseYear);
    let y1 = document.querySelector(".releaseYear");
    y1.appendChild(x1);


    let x2 = document.createTextNode(collection[1].releaseYear);
    let y2 = document.querySelectorAll(".releaseYear")[1];
    y2.appendChild(x2);


    let x3 = document.createTextNode(collection[2].releaseYear);
    let y3 = document.querySelectorAll(".releaseYear")[2];
    y3.appendChild(x3);


    let x4 = document.createTextNode(collection[3].releaseYear);
    let y4 = document.querySelectorAll(".releaseYear")[3];
    y4.appendChild(x4);


    let x5 = document.createTextNode(collection[4].releaseYear);
    let y5 = document.querySelectorAll(".releaseYear")[4];
    y5.appendChild(x5);
}
for (let i = 0; i < 1; i++) {
    let x1 = document.createTextNode(collection[0].genre);
    let y1 = document.querySelector(".genre");
    y1.appendChild(x1);


    let x2 = document.createTextNode(collection[1].genre);
    let y2 = document.querySelectorAll(".genre")[1];
    y2.appendChild(x2);


    let x3 = document.createTextNode(collection[2].genre);
    let y3 = document.querySelectorAll(".genre")[2];
    y3.appendChild(x3);


    let x4 = document.createTextNode(collection[3].genre);
    let y4 = document.querySelectorAll(".genre")[3];
    y4.appendChild(x4);


    let x5 = document.createTextNode(collection[4].genre);
    let y5 = document.querySelectorAll(".genre")[4];
    y5.appendChild(x5);
}
for (let i = 0; i < 1; i++) {
    let y1 = document.createElement("img");
    y1.setAttribute ("src", collection[0].albumArtwork);
    console.log (y1);
    let x1 = document.querySelector(".albumArtwork");
    console.log (x1);
    x1.appendChild(y1);

    let y2 = document.createElement("img");
    y2.setAttribute ("src", collection[1].albumArtwork);
    console.log (y2);
    let x2 = document.querySelectorAll(".albumArtwork")[1];
    console.log (x2);
    x2.appendChild(y2);

    let y3 = document.createElement("img");
    y3.setAttribute ("src", collection[2].albumArtwork);
    console.log (y3);
    let x3 = document.querySelectorAll(".albumArtwork")[2];
    console.log (x3);
    x3.appendChild(y3);

    let y4 = document.createElement("img");
    y4.setAttribute ("src", collection[3].albumArtwork);
    console.log (y4);
    let x4 = document.querySelectorAll(".albumArtwork")[3];
    console.log (x4);
    x4.appendChild(y4);

    let y5 = document.createElement("img");
    y5.setAttribute ("src", collection[4].albumArtwork);
    console.log (y5);
    let x5 = document.querySelectorAll(".albumArtwork")[4];
    console.log (x5);
    x5.appendChild(y5);
}

for (let i = 0; i < 1; i++) {
    let x1 = document.createTextNode(collection[0].albumLabel);
    let y1 = document.querySelector(".albumLabel");
    y1.appendChild(x1);


    let x2 = document.createTextNode(collection[1].albumLabel);
    let y2 = document.querySelectorAll(".albumLabel")[1];
    y2.appendChild(x2);


    let x3 = document.createTextNode(collection[2].albumLabel);
    let y3 = document.querySelectorAll(".albumLabel")[2];
    y3.appendChild(x3);


    let x4 = document.createTextNode(collection[3].albumLabel);
    let y4 = document.querySelectorAll(".albumLabel")[3];
    y4.appendChild(x4);


    let x5 = document.createTextNode(collection[4].albumLabel);
    let y5 = document.querySelectorAll(".albumLabel")[4];
    y5.appendChild(x5);

}
for (let i = 0; i < 1; i++) {
    let x1 = document.createTextNode(collection[0].albumCountryOfOrigin);
    let y1 = document.querySelector(".CountryOfOrigin");
    y1.appendChild(x1);


    let x2 = document.createTextNode(collection[1].albumCountryOfOrigin);
    let y2 = document.querySelectorAll(".CountryOfOrigin")[1];
    y2.appendChild(x2);


    let x3 = document.createTextNode(collection[2].albumCountryOfOrigin);
    let y3 = document.querySelectorAll(".CountryOfOrigin")[2];
    y3.appendChild(x3);


    let x4 = document.createTextNode(collection[3].albumCountryOfOrigin);
    let y4 = document.querySelectorAll(".CountryOfOrigin")[3];
    y4.appendChild(x4);


    let x5 = document.createTextNode(collection[4].albumCountryOfOrigin);
    let y5 = document.querySelectorAll(".CountryOfOrigin")[4];
    y5.appendChild(x5);
}

let changePositionDivs =  document.getElementsByClassName

/* for (let i = 0; i < 5; i++) {
let test = document.querySelectorAll("section")[i];
console.log (test);
test.className = "section - " + (i+1);
} */



let  x = 1;
let numberSections = document.querySelectorAll ("section");
for (let item of numberSections) {
    item.className = "section-" + (x++);
} 

let t = 1;
let numberAlbumLabel = document.querySelectorAll (".albumLabel");
for (let item of numberAlbumLabel) {
    item.className = "albumLabel-" + (t++);
}

let getFirstDiv = document.querySelector("div");
let getFirstArtwork = document.querySelector(".albumArtwork");
let getFirstAlbumLabel = document.querySelector(".albumLabel");
getFirstDiv.insertBefore(getFirstArtwork,getFirstAlbumLabel);


let getSecondDiv = document.querySelectorAll("div")[8];
console.log (getSecondDiv);
let getFirstSection = document.querySelector("section");
console.log (getFirstSection);
let getSecondSection = getFirstSection.nextElementSibling;
console.log (getSecondSection);
let getSecondSectionChildren = getSecondSection.childNodes;
console.log (getSecondSectionChildren);
let getSecondSectionChildrensChildren = getSecondSectionChildren.children;
console.log (getSecondSectionChildrensChildren);



function GFG_Fun() {
    parent = document.getElementById('parent');
    children = parent.querySelectorAll('.child');
    down.innerHTML = "Text of child node is - '" 
        + children[0].innerHTML 
        + "' and '" 
        + children[1].innerHTML 
        + "'";


/* let getSecondDiv = document.querySelectorAll("div");
let getFirstArtwork = document.querySelector(".albumArtwork");
let getFirstAlbumLabel = document.querySelector(".albumLabel");
getSecondDiv.insertBefore(getFirstArtwork,getFirstAlbumLabel); */


/* let getSecondDiv = document.querySelector("div")[1];
let getThirdDiv = document.querySelector("div")[2];
let getFourthDiv = document.querySelector("div")[3]; */


/* let numbersArray = [1,2,3,4,5];
let i = 0;

for(let item of numbersArray) {
    let test = document.querySelectorAll("section");
console.log (test);
test[i++].className = ("section-" + item);
}  */




// TODO: try to get something in there
// TODO: get the correct info in there

// TODO: style Nodes & get info in there.




/* const test2 = document.collection[0].genre[0];
console.log(test2); */


// A similar method would be:

/* collection.forEach((album) => {
    console.log(album.genre);
}) */

/* const hello = document.getElementById("123");
hello.classList.add = "test"; */

// TODO: 1. function (grab collection) 2. for collection[i] 3.grab collection[1].albumName 4.insert as InnerHTML

/* console.log(collection.albumName[0]); */