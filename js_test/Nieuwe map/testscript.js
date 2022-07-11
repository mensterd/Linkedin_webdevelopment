
// Import the Class
import Persoon from './Persoon.js';

const dimitrie = new Persoon('Dimitrie', 'Anjelierstraat', 'june 29, 1971');

let age = dimitrie.getAge();


const content = `
<article>
    <ul class="list-style">
        <li>Naam: ${dimitrie.naam}</li>
        <li>Adres: ${dimitrie.adres}</li>
        <li>Dagen oud: ${dimitrie.getAge()}</li>
    </ul>
</article
<div>
    <p class="testr"></p>
</div>
`;

document.body.innerHTML = content;

const do_some = () => {
    consolelog('boe');
}


const square = document.querySelector('.testr')
square.addEventListener('mouseover', (event) => {
    console.log(event)
});