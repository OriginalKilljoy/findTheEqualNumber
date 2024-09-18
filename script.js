/* Lag en funskjon som genererer 2 random tall så lenge tallene er ulike fra hverandre.
Når de er like print ut teksten "Equal numbers found" - samt hvilke tall det ble.
Evt console.log() tallene for hver runde.

Jeg trenger:
- Funksjon som genererer tall - DONE
- Funksjon som sammenligner - DONE
- En variabel for hvert tall - DONE
- Div som skal vise tekst inkludert tall når den har funnet likt tall - DONE
- En knapp for å starte - DONE
- En knapp for å resete - DONE
*/

//MODEL

//Her ligger variablene mine for de to numrene som skal sammenlignes, og teksten som skal printes når det er gjort.
let firstNum;
let secondNum;
let success = "";


//VIEW
updateView();

function updateView() {
    document.getElementById("app").innerHTML = /*HTML*/ `
    <button onclick="getEqualNumbers()">Get an equal number!</button>
    <button onclick="reset()">Try again!</button>
    <div id="successScreen">${success}</div>
    `;
}

//CONTROLLER

//Denne genererer random tall
function getRandomNumbers() {
    return Math.floor(Math.random() * 10);
}

//Denne lagrer de randome tallene inni variablene våres
//Den skriver disse tallene ut i konsollet
//Den kjører en sammenligning helt frem til den finner et likt tall
//Når den finner et likt tall kjører den printSuccess()
function getEqualNumbers() {
    firstNum = getRandomNumbers();
    secondNum = getRandomNumbers();

    console.log(firstNum);
    console.log(secondNum);
    while (firstNum != secondNum) {
        getEqualNumbers();

        if (firstNum == secondNum) {
            printSuccess();
        }
    }
}

//Denne legger inn teksten vi skal vise i success variabelen vår så den kan brukes i Viewet vårt
//Den sender dermed denne informasjonen i successScreen
function printSuccess() {
    success = document.getElementById("successScreen").innerHTML = `Equal numbers found! You found ${firstNum}`;
    updateView();
}

//Denne resetter alt så vi kan starte på nytt
function reset() {
    firstNum = 0;
    secondNum = 0;
    success = "";

    updateView();
}
