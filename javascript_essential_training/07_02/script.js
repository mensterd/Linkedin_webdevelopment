/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";

const collection = ["Piggy", item, 5, true];
const tester = ["boe"];

console.log(collection[1]);

collection[2]  = "Dimitrie";
collection.push("mennings", 8, true) ;
collection.unshift("eerste");
console.log(collection);

collection.forEach(function (item) {
    item = `<li>${item}</li>`;
    // console.log(item);

});

let baha = collection.find(function (item) {
    if (item.length >= 5) {
        console.log(item);
    }
})

