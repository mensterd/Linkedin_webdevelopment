/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Fles from "./fles.js";

const dopper = new Fles('Dopper waterfles', 500, 'blauw');
  

console.log("fles object:", dopper);

dopper.vul_fles(250);
console.log(dopper.inhoud);

// template literal
const content = `
  <ul>
    <li>Naam: ${dopper.naam}</li>  
    <li>Kleur: ${dopper.kleur}</li>
    <li>inhoud: ${dopper.inhoud}</li>
  </ul>
`;

const cont = '<h1>' + dopper.naam + ' ' + dopper.inhoud + '</h1>';

//document.body.innerHTML = content;
document.body.innerHTML = cont;