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
for (let i = 0; i < 1 ; i++) {
    selectButtons[0].addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.className = "displayedsquare";
        createDiv.style.backgroundColor = "lime";
        selectActionSquareWrapper.append(createDiv);
    })
}


for (let i = 0; i < 1 ; i++) {
    selectButtons[1].addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.className = "displayedsquare";
        createDiv.style.backgroundColor = "magenta";
        selectActionSquareWrapper.append(createDiv);
    })
}

for (let i = 0; i < 1 ; i++) {
    selectButtons[2].addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.className = "displayedsquare";
        createDiv.style.backgroundColor = "orange";
        selectActionSquareWrapper.append(createDiv);
    })
}



selectButtons.forEach(button => {
    button.addEventListener('click', (clickOnSquare) => {
        let createList = document.createElement ("li");
        selectActionLog.append(createList);

    })
})

const _initTime = Date.now()

function getElapsedTime() {
    return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

function clickOnSquare(e) {
    console.log(e.target.classList[1])
    console.log(getElapsedTime())
}

const actionsquares = document.querySelectorAll('.actionsquare')
for (let actionsquare of actionsquares) {
    actionsquare.addEventListener('click', clickOnSquare)
}


// This does the exact same but different syntax





/// this code does the same as a forEach loop.

let createDiv = document.createElement('div');

/* function copyProperties() {
    let takeProperties = Object.assign(createDiv, selectButtons[0])
} */

let selectButtonz = document.querySelector('.actionsquare');
console.log(selectButtonz);


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

