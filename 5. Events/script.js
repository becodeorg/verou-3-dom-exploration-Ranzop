// TODO: trigger, target, callback:
// TODO: create onclick trigger
// TODO: target: action squares
// TODO: callback: create new div
// TODO: callback: read the color of the clicked div and replicate it.

// Everytime the user clicks on one of the action squares
// Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
// Create a new <li> in the log below to state when the action was done



let selectButtons = document.querySelectorAll(".actionsquare");
console.log(selectButtons);

let selectActionSquareWrapper = document.querySelector(".displayedsquare-wrapper");
console.log(selectActionSquareWrapper);

let selectActionLog = document.querySelector("h2");
console.log(selectActionLog);

// print out the word hi, on event.
for (let i = 0; i < 1; i++) {
    selectButtons[0].addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.className = "displayedsquare";
        createDiv.style.backgroundColor = "lime";
        selectActionSquareWrapper.append(createDiv);
    })
}


for (let i = 0; i < 1; i++) {
    selectButtons[1].addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.className = "displayedsquare";
        createDiv.style.backgroundColor = "magenta";
        selectActionSquareWrapper.append(createDiv);
    })
}

for (let i = 0; i < 1; i++) {
    selectButtons[2].addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.className = "displayedsquare";
        createDiv.style.backgroundColor = "orange";
        selectActionSquareWrapper.append(createDiv);
    })
}

/* const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
    
} 

for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', getClass)
} 

function clickOnSquare(e) {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}
 */

// (e) in deze functie slaat op de addEventListener in dezelfde functie,
// en wordt dus niet afgeroepen door een voorgaande functie.

const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

selectButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        let createListItem = document.createElement("li");
        createListItem.textContent = getElapsedTime() + " " + "Did you just ATTACK the" + " " + e.target.classList[1] + " SQUARE??!!";
        selectActionLog.append(createListItem);
    })
})

// TODO: Add an event listener on the document <body>,

let selectBody = document.querySelector ("body");
console.log (selectBody);
selectBody.addEventListener('keydown', generateRandomColor);

function generateRandomColor(e) {
    if (e.which === 32) {
    selectBody.style.backgroundColor = "#" + (Math.floor(Math.random() * 16777215).toString(16));
    console.log (getElapsedTime());
    let createListItem2 = document.createElement("li");
        createListItem2.textContent = getElapsedTime() + " " + "It took you this long to figure out where the space-bar is? Preposterous,you puny imbecil!";
        selectActionLog.append(createListItem2);
}}


// TODO: When the l key is pressed the log gets deleted (erases the generated <li>s)
// TODO: When the s key is pressed the squares get deleted (erases the generated squares)

// TODO: get elapsed time + string "created a new +class"

/* var x = document.getElementById('clickB');
var counter = 1;

console.log(getElapsedTime);

// TODO: get this info into the correct node
// TODO: display the node.







let createDiv = document.createElement('div');

let selectButtonz = document.querySelector('.actionsquare');
console.log(selectButtonz); */

// This does the exact same but different syntax





/// this code does the same as a forEach loop.


/* function copyProperties() {
    let takeProperties = Object.assign(createDiv, selectButtons[0])
} */




/* selectButtons.addEventListener("click", e => {
    if (e.target.matches(".actionsquare")) {
    console.log("hi")
    }
}) */

/* // print out what information the eventlistener gets on click
selectButtons.addEventListener("click", e => {
    console.log(e)
})

// print out on what element the event is enabled.
selectButtons.addEventListener("click", e => {
    console.log(e.target)
})

// this returns a Nodelist, with concomitant need to define the index/working in arrays
let selectButtonz = document.querySelectorAll('.actionsquare');
console.log(selectButtonz);

selectButtonz.forEach(button => {
    button.addEventListener('click', () => {
        console.log("hi")
    })
})

let createDiv = document.createElement('div');
createDiv.class = "displayedsquare";
createDiv.style.width = "200px";
createDiv.style.height = "200px";
createDiv.style.backgroundColor = "red";
document.body.append(createDiv);

function addEventListener (click, selectButtons, callback) {
    document.addEventListener("click", e => {
        if (e.target.matches(selector)) callback(e)
    })
}

// let's combine our blocks of code

document.addEventListener("click", e => {
    if (e.target.matches("selectButtons")) {
        console.log("hi")
    }
})



/* selectButtons.forEach(actionsquare => {
    actionsquare.addEventListener("click", () => {
        console.log("hello")
    })
})
 */
/* function clickTry(e) {
    console.log("hi")

} */
/* selectButtons.forEach(consoleItem);

function consoleItem(item, index, arr){
    console.log(item);
}
 */

/*   () => {
    let createDiv = document.createElement("div");
    createDiv.class = "displayedsquare";
    createDiv.style.width = "200px"
    createDiv.style.height = "200px"
    createDiv.style.backgroundColor = "red"
    createDiv.appendChild(selectButtons);
    }
}) */

/* createNewDiv = () => {
    let createDiv = document.createElement("div");
    createDiv.class = "displayedsquare";
    createDiv.appendChild(selectButtons);
}

selectButtons.addEventListener(
    'click',
    createNewDiv ()
) */

//exemplary code from Bert ( does not work here)
// (Q: object:assign)
/* 
const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    console.log(e.target.classList[1]);
    console.log(getElapsedTime());
}

// TODO: get new div
const containerSection = document.querySelector(".displayedsquare-wrapper");
console.log(containerSection);
const div = document.createElement("div");
div.classList.add("displayedsquare");
containerSection.append(div);
/* containerSection[0].addEventListener('click', clickonSquare); */
/* 
// TODO: get color
const color = e.target.classList[1];

// TODO: apply color

div.classList.add(color);

const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
}
 */