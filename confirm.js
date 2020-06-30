function initPage(){
	let panier = JSON.parse(localStorage.getItem ('panier')); 
	totalPrice(panier);
	console.log(panier); 

	if (panier !== null) {
		panier.forEach(function(eltSelected) {
		let item = document.createElement("li");       // Création d'un élément li
		console.log(eltSelected);
		
			
		let picBear = document.createElement("img");   // creation de l'elt img
		picBear.classList.add('picted');               //ajout de class a img
		picBear.setAttribute('src',eltSelected.pict);     // ajout d'attribut src a img & son emplacement
		let oursName = document.createElement("div");  // creation de la div pour le name
		oursName.classList.add('name');                // ajout de class name a la div
		oursName.textContent = eltSelected.name;			   // Donner le texte "name" du tableau a oursName
		let oursPrice = document.createElement("div"); // creation de la div pour le prix
		oursPrice.classList.add('price');              // ajout de la class a la div prix
		oursPrice.textContent = eltSelected.price +" €";			   // donner le texte "price" du tableau a oursPrice

		item.appendChild(picBear);                     //ajout des 3 elt créés dans le a 
		item.appendChild(oursName);
		item.appendChild(oursPrice);

		
	//	document.getElementById("resum_list_cart").appendChild(item);  (changer l'ID  rnvli)

	});
}
}

initPage();

function totalPrice (basket) {
    let resultPrice = 0; 
    if (basket === null) {  // Basket is not iterable donc si basket === null creation tableau vide qui renvoie donc 0
        basket = [];
    }

    for (let item of basket) {

      resultPrice += item.price * item.quantité;
      console.log(resultPrice);
	}
	console.log(resultPrice);
	if (resultPrice !== 0){
	var price = document.createElement("p");                                     // Création d'un élément p
	price.id = "price_total_resum";                                                    // Définition de son identifiant
	price.appendChild(document.createTextNode("Total: " +  resultPrice + "€.")); // Définition de son contenu textuel
	document.getElementById("total_price_id").appendChild(price);                   // Insertion du nouvel élément
	}
    	else {
			var noprice = document.createElement("p");
			noprice.id = "noprice_id";
			noprice.appendChild(document.createTextNode("Votre panier est vide."));
			document.getElementById("total_price_id").appendChild(noprice);

	}
}

// let orderId = localStorage.getItem("orderId"); // On récupère l'id de la commande enregistrée dans le localStorage
// document.getElementById("idOrder").textContent = orderId;


let dataStorage = window.localStorage.getItem('datacmd');
let dataJson = JSON.parse(dataStorage);
console.log('orderID: ' + dataJson.orderId);

let orderIdText = document.querySelector('#idOrder');
orderIdText.innerHTML = dataJson.orderId;

console.log(dataJson.products[0].name);

for( let i = 0; i < dataJson.products.length ; i ++) {
	console.log(dataJson.products[i].name);
}


function afficheResum(){
	

	if (dataJson.products !== null) {
		dataJson.products.forEach(function(eltSelected) {
		let item = document.createElement("li");       // Création d'un élément li
		console.log("bla" + eltSelected.name);
		
			
		let picBear = document.createElement("img");   // creation de l'elt img
		picBear.classList.add('pictedresum');               //ajout de class a img
		picBear.setAttribute('src',eltSelected.imageUrl);     // ajout d'attribut src a img & son emplacement
		let oursName = document.createElement("div");  // creation de la div pour le name
		oursName.classList.add('nameresum');                // ajout de class name a la div
		oursName.textContent = eltSelected.name;			   // Donner le texte "name" du tableau a oursName
		let oursPrice = document.createElement("div"); // creation de la div pour le prix
		oursPrice.classList.add('priceresum');              // ajout de la class a la div prix
		oursPrice.textContent = eltSelected.price +" €";			   // donner le texte "price" du tableau a oursPrice
		/*let oursQt = document.createElement("div");    // crea div for Quantité
		oursQt.classList.add("qteresum");                   // ajout de class 
		oursQt.textContent = "Quantité: " + eltSelected.quantité; 
		*/



		item.appendChild(picBear);                     //ajout des 3 elt créés dans le a 
		item.appendChild(oursName);
		item.appendChild(oursPrice);
		//item.appendChild(oursQt);

		

		document.getElementById("resum_list_order").appendChild(item); //ajout de li dans la class resum_list_cart(ul)


	});
}
}

afficheResum();
function clearLocalStorage() {
	localStorage.clear();
	console.log(localStorage);
}

//clearLocalStorage();