

d = document.querySelectorAll('p')
d.forEach(poep => {
    console.log(poep)
});


const button = document.querySelector('button');

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



const main = document.querySelector('main');
main.append(addPack(greenPack));
