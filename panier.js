let addToCart = document.getElementById("clearPanier"); //recupérer le btn nettoyage panier

addToCart.addEventListener("click", clearLocalStorage); // crea evnt click btn 

function clearLocalStorage() {
    localStorage.clear();
    console.log("Panier vidé: ", localStorage);
}


let panier = JSON.parse(localStorage.getItem ('panier')); 
totalPrice(panier);
console.log(panier); 

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

	

	document.getElementById("resum_list_cart").appendChild(item); //ajout de li dans la class resum_list_cart(ul)	


});

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
    document.getElementById("total_price_id").textContent =  resultPrice ;
}




