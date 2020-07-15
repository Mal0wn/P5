let listeTeddies = [];
ajaxGet("http://localhost:3000/api/teddies", function (response) {
	listeTeddies = response; 
	 
	listeTeddies.forEach(function(ours) {
		let bear = document.createElement("li");       					// Création d'un élément li
		let aBear = document.createElement("a");      					 // creation d'un element a 
		aBear.setAttribute('href','produit.html?id=' + ours._id)	  	 // ajout d'attribut href & emplacement html	
		let picBear = document.createElement("img");   					// creation de l'elt img
		picBear.classList.add('picted');               					//ajout de class a img
		picBear.setAttribute('src',ours.imageUrl);     					// ajout d'attribut src a img & son emplacement
		let oursName = document.createElement("div");  					// creation de la div pour le name
		oursName.classList.add('name');                					// ajout de class name a la div
		oursName.textContent = ours.name;			   					// Donner le texte "name" du tableau a oursName
		let oursPrice = document.createElement("div"); 					// creation de la div pour le prix
		oursPrice.classList.add('price');              					// ajout de la class a la div prix
		oursPrice.textContent = ours.price +" €";			   			// donner le texte "price" du tableau a oursPrice

		aBear.appendChild(picBear);                     				//ajout des 3 elt créés dans le a 
		aBear.appendChild(oursName);
		aBear.appendChild(oursPrice);

		bear.appendChild(aBear); 					   					// ajout de la balise <a> dans mon lit

		document.getElementById("list_items").appendChild(bear); 		//ajout de li dans la class list_items(ul)	

	});
});
