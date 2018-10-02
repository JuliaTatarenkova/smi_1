'use strict';

let shopWindow = document.getElementById('shop-window');
let card = document.createElement('div');

let xhr = new XMLHttpRequest();
xhr.open('GET', 'products.json', false);
xhr.send();

if (xhr.status !== 200) {
	console.log("Error!");
} else {
	let products = JSON.parse(xhr.responseText);

	for (let i = 0; i < products.length; i++) {
		let product = products[i];
		let div = document.createElement('div');
		div.classList.add('card');
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


