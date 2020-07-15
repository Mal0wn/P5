initPage();

let addToCart = document.getElementById("clearPanier"); //recupérer le btn nettoyage panier
addToCart.addEventListener("click", clearLocalStorage); // crea evnt click btn 

function clearLocalStorage() {
    localStorage.clear();
	console.log("Panier vidé: ", localStorage);
	document.getElementById("resum_list_cart").innerHTML=""; // vide contenu liste
	document.getElementById("total_price_id").innerHTML=""; // vide total price
	initPage();
	window.location.href = "index.html";
}

function initPage(){
	let panier = JSON.parse(localStorage.getItem ('panier')); 
	totalPrice(panier);
	

	if (panier !== null) {
		panier.forEach(function(eltSelected) {
		let item = document.createElement("li");       // Création d'un élément li
		
		
			
		let picBear = document.createElement("img");   // creation de l'elt img
		picBear.classList.add('picted');               //ajout de class a img
		picBear.setAttribute('src',eltSelected.pict);     // ajout d'attribut src a img & son emplacement
		let oursName = document.createElement("div");  // creation de la div pour le name
		oursName.classList.add('name');                // ajout de class name a la div
		oursName.textContent = eltSelected.name;			   // Donner le texte "name" du tableau a oursName
		let oursPrice = document.createElement("div"); // creation de la div pour le prix
		oursPrice.classList.add('price');              // ajout de la class a la div prix
		oursPrice.textContent = eltSelected.price +" €";			   // donner le texte "price" du tableau a oursPrice
		let oursQt = document.createElement("div");    // crea div for Quantité
		oursQt.classList.add("qte");                   // ajout de class 
		oursQt.textContent = "Quantité: " + eltSelected.quantité; 



		item.appendChild(picBear);                     //ajout des 3 elt créés dans le a 
		item.appendChild(oursName);
		item.appendChild(oursPrice);
		item.appendChild(oursQt);

		

		document.getElementById("resum_list_cart").appendChild(item); //ajout de li dans la class resum_list_cart(ul)

	});
}
}

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
	price.id = "price_total";                                                    // Définition de son identifiant
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


function submit(name , firstname, email , address , city ){
	let data = {
		"contact" : {                            // changer le nom des clefs
			"firstName": firstname , 
			"lastName": name, 
			"address": address, 
			"city" : city,  					
			"email": email },
		
		"products": products
		};
		
		ajaxPost("http://localhost:3000/api/teddies/order", data);
		setTimeout(function(){window.location.href= "confirm.html";}, 3000);
			 
		
}


function validate(){
	let nameCusto = document.getElementById("name_custo").value;
	let firstNameCusto = document.getElementById("firstname_custo").value;
	let mailCusto = document.getElementById("mail_custo").value;
	let adressCusto = document.getElementById("adress_custo").value;
	let cityCusto = document.getElementById("city_custo").value;

	let testSubmit = true;

 	let regexCourriel = /.+@.+\..+/;
    let validiteCourriel = "";
    if (!regexCourriel.test(mailCusto)) {
		validiteCourriel = "Adresse invalide";
		document.getElementById("error_mail").textContent = validiteCourriel;
		testSubmit = false;
		
		
		
	}

	

	if (testSubmit === true) {
		//POST 
		submit(nameCusto,firstNameCusto,mailCusto,adressCusto,cityCusto);
	}
}

let submitPanier = document.getElementById("submitPanier");
submitPanier.addEventListener("click", validate); // crea evnt click validation

// Requete Post 


let products = []; // initialisation d'un tableau qui contiendra les ID
let basket = JSON.parse(localStorage.getItem('panier')); // Récupération du panier

// on remplit le tableau products avec les ids récupérés du localStorage du panier
for(let i=0; i<basket.length; i++){
	products.push(basket[i].id);
}

for(let i=0; i<products.length; i++){
	
}







