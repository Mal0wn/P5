var listeTeddies = [];
ajaxGet("http://localhost:3000/api/teddies", function (response) {
listeTeddies = response; 
console.log(listeTeddies); 




listeTeddies.forEach(function(ours) {
	var bear = document.createElement("li");       // Création d'un élément li

	//ajout de l'evenement
		bear.addEventListener("click", gotoproduit(ours._id));
		console.log(ours._id);
	var aBear = document.createElement("a");       // creation d'un element a 
	aBear.setAttribute('href','produit.html?id=' + ours._id)	   // ajout d'attribut href & emplacement html	
	var picBear = document.createElement("img");   // creation de l'elt img
	picBear.classList.add('picted');               //ajout de class a img
	picBear.setAttribute('src',ours.imageUrl);     // ajout d'attribut src a img & son emplacement
	var oursName = document.createElement("div");  // creation de la div pour le name
	oursName.classList.add('name');                // ajout de class name a la div
	oursName.textContent = ours.name;			   // Donner le texte "name" du tableau a oursName
	var oursPrice = document.createElement("div"); // creation de la div pour le prix
	oursPrice.classList.add('price');              // ajout de la class a la div prix
	oursPrice.textContent = ours.price +" €";			   // donner le texte "price" du tableau a oursPrice

	aBear.appendChild(picBear);                     //ajout des 3 elt créés dans le a 
	aBear.appendChild(oursName);
	aBear.appendChild(oursPrice);

	bear.appendChild(aBear); 					   // ajout de la balise <a> dans mon lit

	document.getElementById("list_items").appendChild(bear); //ajout de li dans la class list_items(ul)


	

});

//initialisation données page produit                          Voir Appel API!!!!!!

function gotoproduit(id) {
	let selectedTeddy; 

	for (let teddy of listeTeddies){
		if (teddy._id === id) {				//recherche du bon teddy par id
			selectedTeddy = teddy;
		} 
	}
	console.log(selectedTeddy);

var nameTeddy = document.getElementsByClassName("title_teddy");   //recupérer elt qui porte name teddy

	if(nameTeddy.length > 0 ){										// elimine code err if not good html
nameTeddy[0].textContent = selectedTeddy.name;						// affecte nom name teddy a l'elt
}

var picTeddy = document.getElementsByClassName("img_produit");  // recuperer elt qui porte l'img 

	if(picTeddy.length > 0 ) {
		picTeddy[0].setAttribute("src",selectedTeddy.imageUrl);
	}

var descripTeddy = document.getElementsByClassName("description");  // recuperer elt qui porte la description

    if(descripTeddy.length > 0) {
        descripTeddy[0].textContent = selectedTeddy.description;
    }


var select = document.getElementById("choosecolor_id");

for (let color of selectedTeddy.colors) {
	var eltCol = document.createElement('option');
	eltCol.setAttribute("value",color);
	eltCol.textContent = color; 
	if (select) {
		select.appendChild(eltCol);
	}
}


if (document.getElementById("div_price")){

// recuperer elt span qui va porter le prix
  var paraprice = document.createElement("p"); 
  paraprice.id= "para_price_id" ;
  paraprice.textContent = "Prix : " + selectedTeddy.price + "€";

   document.getElementById("div_price").appendChild(paraprice); //ajout du p paraprice à la div div_price
}
    

}


});