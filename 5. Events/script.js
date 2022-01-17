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

// print out the word hi, on event.
selectButtons.forEach(button => {
    button.addEventListener('click', () => {
        let createDiv = document.createElement('div');
        createDiv.class = "displayedsquare";
        createDiv.style.width = "200px";
        createDiv.style.height = "200px";
        createDiv.style.backgroundColor = "red";
        document.body.append(createDiv);
    })
})

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
} */

// let's combine our blocks of code

/* document.addEventListener("click", e => {
    if (e.target.matches("selectButtons")) {
        console.log("hi")
    }
})
 */


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