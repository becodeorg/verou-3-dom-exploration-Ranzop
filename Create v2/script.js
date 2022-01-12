// TODO: create array with learners name

const learners = [
    "Ahmad",
    "Dante",
    "Michael",
]

console.log (learners);

// TODO: create & append section

/* const sectionElement = document.createElement("section");
document.body.appendChild(sectionElement); */


// TODO: append to article

const articleElement = document.createElement("article");
document.body.appendChild(articleElement);


/* // TODO: put section into article
function appendSectionElementIntoArticleElement(articleElement) {
articleElement.append(sectionElement); // father.include.son
} */

// TODO: create section for every learner

for (i = 0; i < learners.length; i++) {
console.log (learners [i]);
const learner = learners[i];
const sectionElement = document.createElement("section");
document.body.appendChild(sectionElement);
articleElement.append(sectionElement);
sectionElement.innerHTML = learner;
sectionElement.style.color = "#" + Math.floor(Math.random()*16777215).toString(16);
}




// TODO: create paragraph with name of each learner+

// TODO: generate random color

