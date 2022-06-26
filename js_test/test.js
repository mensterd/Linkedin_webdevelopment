

d = document.querySelectorAll('p')
d.forEach(poep => {
    console.log(poep)
});



// # backpack ###################################################################

// maak een backpack object aan genaamd greenPack
const greenPack = {
    name: 'Froggpack',
    color: 'Green',
    itemsInBag: 0,

    addItem: function() {
        this.itemsInBag += 1;
    },

    removeItem: function(nrItems) {
        this.itemsInBag -= nrItems;
    },
};



// Arrow function
const addPack = (currentPack) => {
    const newArticle = document.createElement('article');
    newArticle.innerHTML = `
        <h1>Overzicht:</h1>
        <ul>
            <li>Name: ${currentPack.name}</li>
            <li>Color: ${currentPack.color}</li>
            <li>items: ${currentPack.itemsInBag}</li>
        </ul>
    `;
    return newArticle;
};


// haal de main sectie op uit het html document
const main = document.querySelector('main');
// voeg de gegevens van greenPack toe aan de html code van het main object
main.append(addPack(greenPack));


// tip functie ###################################################################################


// Append de berekende tip als <i> in een <section> toe aan het document
const addTip = (tip) => {
    const main = document.querySelector('main');

    const newArticle = document.createElement('section');
    newArticle.innerHTML = `
        <i>Euro ${tip}</i>
    `;
    main.append(newArticle);
}


// Test met arrowfunctie


arrow_test = (a) => {
    a+10;
    return a;
}
// Dit is hetzelfde als:
// arrow_test = (a)   =>  a+10;
// Of in dit geval, bij een enkel argument:
// arrow_test = a => a+10;


//  bereken 8$ van het bedrag en geef het door aan de functie die als argument wordt meegegeven
const tipCalc = (bedrag, callback) => {
    callback(bedrag*0.08);
}

// voer tipcalc functie uit met parameter bedrag en de uit te voeren functie
tipCalc(23.65, addTip);


// # Eventlister ##########################################################################


const doSomething = (event) => {
    console.log('Click!');
    console.log(event);
    console.log(arrow_test(12));
}


const button = document.querySelector('input#knop');
console.log(button);

button.addEventListener('click', (event => {
    doSomething(event);
}));