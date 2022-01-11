/* 
1. Select !important ID
2. add title "this is an important item"
 */

/* Step 1 */


var getAllClassImportant = document.querySelectorAll(".important");
console.log(getAllClassImportant);


/* Step 2 */

/* You use the loop to access the index of the array where the .important classes are stored
We need to create this loop because we are accessing an array that we created beforehand */

for (let i = 0; i < getAllClassImportant.length; i++) {
    getAllClassImportant[i].setAttribute("title", "This is an important item");
}

/* Select all the img tags and loop through them. If they have no important class, turn their display property to none */

var getImg = document.querySelectorAll("img:not(.important)");
console.log (getImg);

for (let i = 0; i < getImg.length; i++) {
    getImg[i].setAttribute("display", "none");
}


/* AAAAND IT WORKS WOHOOO */

/* selected all imgs
Now, let's loop over and select all the ones that don't have an important class */

/* var getImgNoImportant = document.getImg.querySelectorAll ("!.important");
console.log (getImgNoImportant);  this code does not work :p*/


/* var getImgNoImportant = document.getImg.querySelector (".important");

for (let i = 0; i < getImg.length; i++) {
    getImg[i].setAttribute("title", "This is an important item");
} */


/* Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well */

/* First you select all paragraphs with a class, then in the for loop you let it print out  */

const rgba1 = Math.round((Math.random()*255.));
const rgba2 = Math.round((Math.random()*255.));
const rgba3 = Math.round((Math.random()*255.));
console.log (rgba1);




function generateRandomColor() {
    return "rgb("+rgba1+","+rgba2+","+rgba3+")";
}

for (var i = 0; i < 10; i++) {
    console.log(generateRandomColor());
  }


/* for (let i = 0; i < getParagraphs.length; i++) {
    console.log(getParagraphs[i].innerText);
}
 */

/* var getPars = document.getElementsByTagName("p"); */
/* var getPars = document.querySelectorAll("p");
for (let i = 0; i < getPars.length; i++) {
    let arrayPars = getPars[i];
console.log (arrayPars);
console.log (arrayPars.className);
}
 */

document.querySelectorAll("p").forEach((element) => {
    if (element.classList.contains(element.className)) {
      
    } else {
        const rgba1 = Math.round((Math.random()*255));
        const rgba2 = Math.round((Math.random()*255));
        const rgba3 = Math.round((Math.random()*255));
  
      element.style.color = "rgb(" + rgba1 + "," + rgba2 + "," + rgba3 + ")";
    }
  });



  
/* for (let i = 0; i < arrayPars.className.length; i++) {
    let arrayPars.className =
} */

/* var getPars1 = document.querySelectorAll("p")[2].className;
console.log (getPars1);

for (let i = 0; i < getPars.length; i++) {
    let arrayPars = getPars[i];
} */




/* for (let backgroundColor of getPars) {
    generateRandomColor ("")
    if class.name = false;
} */

/* for of loop -> select paragraphs

if class.name = empty 
-> random color */


/* Let's first just set the background random again: */

document.body.style.backgroundColor = generateRandomColor("");




/* for ( let i = 0; i < getPars.length; i ++) {
    console.log(getPars.classList)
} */

/* var getParagraphs = document.querySelectorAll("p");
for (let i = 0; i < getParagraphs.length; i++) {
console.log (getParagraphs.getAttribute('class'));
}

 */


/* After lunch
 */









/* Koen's code: */

/* const important = document.querySelectorAll(".important");
console.log(important);
for(let i = 0; i < important.length; i++) {
    getAllClassImportant[i].setAttribute("title", "This is an important item");
} */


/* const par = document.querySelectorAll("p");
for (let i = 0; i < par.length; i++) {
    const currentParagraph = par [i];
    console.log (currentParagraph);
    if (currentParagraph.className)
    console.log (currentParagraph.className);
    else
}
 */
/* This line of code for example only checks once and does not loop through all the elements. */

/* if (currentParagraph.className) {
    for (let i = 0; i < par.length; i++);
} */