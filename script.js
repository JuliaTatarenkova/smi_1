'use strict';

let body = document.body;
let shopWindow = document.createElement('div');
let card = document.createElement('div');
let triggers = document.createElement('div');
let xhr = new XMLHttpRequest();
let count = 0;

shopWindow.className = "shop-window";
triggers.className = "triggers";

triggers.innerHTML ='<i class="add">+</i> <i class="remove">-</i>';

body.appendChild(shopWindow);
xhr.open('GET', 'products.json', false);
xhr.send();

if (xhr.status !== 200) {
	console.log("Error!");
} else {
	let products = JSON.parse(xhr.responseText);

	for (let i = 0; i < products.length; i++) {
		let product = products[i];
		let div = document.createElement('div');
		div.className = 'card';
		div.appendChild(triggers);
		for (let prop in product) {
			if (product.hasOwnProperty(prop)) {
				let htmlTitle = `
				<span class="${ prop }">${ product[prop] }</span>
				`;
				div.innerHTML += htmlTitle;
			}
		}
		shopWindow.appendChild(div);
	}
}


let cards = document.getElementsByClassName('card');

[].forEach.call(cards, function(item){
	let card = item;
	let add = card.getElementsByClassName('add');
	let remove = card.getElementsByClassName('remove');
	let count = 0;
	
	add[0].addEventListener('click', function(){
		console.log(++count);
		// return ++count;
	});
	remove[0].addEventListener('click', function(){
		console.log(--count);
		// return count--;
	});
});

