const para = document.createElement('p');
const app = document.querySelector('#app')

para.textContent = 'Hello'
// para.innerText = 'Hello';
// document.body.appendChild(para);
// document.querySelector('#app').appendChild(para);
app.appendChild(para)

// let paragraph = document.querySelector('p');
let paragraph = document.createElement('p')
paragraph.textContent = 'Bonjour';
app.appendChild(paragraph);

let paragraph2 = document.createElement('p'); 
paragraph2.textContent = 'Coucou';
app.appendChild(paragraph2)
// document.querySelector("#app").appendChild(paragraph2);

let pare = document.createElement('p');
pare.textContent = 'Salut';
app.appendChild(pare)
// document.querySelector("#app").appendChild("pare");

let paragraphi = document.createElement('p');
paragraphi.textContent = 'Holla';
app.appendChild(paragraphi)
// document.querySelector("#app").appendChild("paragraphi");

function createCustomElement(text, elementType) {
  console.log(text)
  const p = document.createElement(elementType);
  p.textContent = text;
  document.querySelector('#app').appendChild(p);
}

// createCustomElement('Salut');
// createCustomElement('Toto');
// createCustomElement('jsfjijzegzoj');
// createCustomElement('veveve');

createCustomElement('salut', 'span');
createCustomElement('salut', 'p');
createCustomElement('toto', 'span');
createCustomElement('bonjour', 'div');
createCustomElement('div', 'bonjour');
// createCustomElement('bonjour', '1');
// createCustomElement('bonjour', 'p', 35);

// createCustomElement('bonjour', 'p', ()=>
// console.log('Je suis passé en argument')
// );

createCustomElement('bonjour', 'p');

// const outerElement = 'p';
// createCustomElement('salut', outerElement)
const elementType = 'p';
createCustomElement('salut', elementType)

// function addition(nb1,nb2) {
//   console.log(nb1 + nb2)
// }

// addition(1,2)