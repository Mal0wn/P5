

function totalPrice (basket) {
    let resultPrice = 0; 
    if (basket === null) {  // Basket is not iterable donc si basket === null creation tableau vide qui renvoie donc 0
        basket = [];
    }

    for (let item of basket) {

      resultPrice += item.price * item.quantité;
      
	}
	
	if (resultPrice !== 0){
	let price = document.createElement("p");                                     // Création d'un élément p
	price.id = "price_total_resum";                                                    // Définition de son identifiant
	price.appendChild(document.createTextNode("Total: " +  resultPrice + "€.")); // Définition de son contenu textuel
	document.getElementById("total_price_id").appendChild(price);                   // Insertion du nouvel élément
	}
    	else {
			let noprice = document.createElement("p");
			noprice.id = "noprice_id";
			noprice.appendChild(document.createTextNode("Votre panier est vide."));
			document.getElementById("total_price_id").appendChild(noprice);

	}
}

let dataStorage = window.localStorage.getItem('datacmd');
let dataJson = JSON.parse(dataStorage);

let dataPanier = window.localStorage.getItem('panier');
let dataJsonPanier = JSON.parse(dataPanier);

let orderIdText = document.querySelector('#idOrder');
orderIdText.innerHTML = dataJson.orderId;



// Fonction qui affiche le resumé de la commande. 
function afficheResum(){
	

	if (dataJson.products !== null) {
		dataJson.products.forEach(function(eltSelected) {
		let item = document.createElement("li");                   // Création d'un élément li
		
		
			
		let picBear = document.createElement("img");               // creation de l'elt img
		picBear.classList.add('pictedresum');                      //ajout de class a img
		picBear.setAttribute('src',eltSelected.imageUrl);          // ajout d'attribut src a img & son emplacement
		let oursName = document.createElement("div");              // creation de la div pour le name
		oursName.classList.add('nameresum');                       // ajout de class name a la div
		oursName.textContent = eltSelected.name;			       // Donner le texte "name" du tableau a oursName
		let oursPrice = document.createElement("div");             // creation de la div pour le prix
		oursPrice.classList.add('priceresum');                     // ajout de la class a la div prix
		oursPrice.textContent = eltSelected.price +" €";		   // donner le texte "price" du tableau a oursPrice
		let oursQt = document.createElement("div");                // crea div for Quantité
		oursQt.classList.add("qteresum");                          // ajout de class 
		 
		let quantite;

			//Comparer les ID du Panier avec les ID du tableau de produits pour récuperer la Qté vu qu'elle ne s'affiche pas dans le tableau de produit..... 
		  
		for(let i = 0; i < dataJsonPanier.length; i++){
			if(dataJsonPanier[i].id == eltSelected._id){
			  quantite = dataJsonPanier[i].quantité;
			  
			}
		}

			oursQt.textContent = "Quantité: " + quantite;



		item.appendChild(picBear);                     
		item.appendChild(oursName);
		item.appendChild(oursPrice);
		item.appendChild(oursQt);

		

		document.getElementById("resum_list_order").appendChild(item); 

			
	});
}
}

afficheResum();


function initPage(){
	let panier = JSON.parse(localStorage.getItem('panier')); 
	totalPrice(panier);
	

	if(localStorage.getItem("panier")) {
		panier.forEach(function(eltSelected) {
		let item = document.createElement("li");          // Création d'un élément li
			
		let picBear = document.createElement("img");      // creation de l'elt img
		picBear.classList.add('picted');                  //ajout de class a img
		picBear.setAttribute('src',eltSelected.pict);     // ajout d'attribut src a img & son emplacement
		let oursName = document.createElement("div");     // creation de la div pour le name
		oursName.classList.add('name');                   // ajout de class name a la div
		oursName.textContent = eltSelected.name;	      // Donner le texte "name" du tableau a oursName
		let oursPrice = document.createElement("div");    // creation de la div pour le prix
		oursPrice.classList.add('price');                 // ajout de la class a la div prix
		oursPrice.textContent = eltSelected.price +" €";  // donner le texte "price" du tableau a oursPrice
		let oursQt = document.createElement("div");
		oursQt.classList.add('price');
		oursQt.textContent = eltSelected.quantité;


		item.appendChild(picBear);                    
		item.appendChild(oursName);
		item.appendChild(oursPrice);
		item.appendChild(oursQt);              
	});
}
}

initPage();

function clearLocalStorage() {
	localStorage.clear();
	
}

clearLocalStorage();
