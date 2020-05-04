const listeTeddies = [{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"azrmofi ham oiahz fmoasihfasmdoi fhadsmofi hasmo ifahdsmo fiasdh miodash"},
{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"amoif  azomifhazoeimfhazeoi zeoifh ozimf hazeoimfehzoifhaz"},
{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"sdamoifh asd fomiazhf mozihfomzif hamozihefo miazh fmoaizh ","imageUrl":"http://localhost:3000/images/teddy_3.jpg"},
{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://localhost:3000/images/teddy_4.jpg","description":"oamsih azmo ihzaefmo iazehfmo iazeomfihaz ioza "},
{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"asdfmio a zmeofihazeoimfhazeomifh maoziehf maoizhe moaziehf moiazeh omzefh ","imageUrl":"http://localhost:3000/images/teddy_5.jpg"}];
console.log(listeTeddies);


listeTeddies.forEach(function(ours) {
	var bear = document.createElement("li");       // Création d'un élément li

	//ajout de l'evenement
		bear.addEventListener("click", gotoproduit(ours._id));
		console.log(ours._id);
	var aBear = document.createElement("a");       // creation d'un element a 
	aBear.setAttribute('href','produit.html')	   // ajout d'attribut href & emplacement html	
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

//initialisation données page produit

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

var descripTeddy = document.getElementById("description");  // recuperer elt qui porte la description

	if(descripTeddy.length > 0 ) {
		descriptTeddy[0].textContent = selectedTeddy.description;
	}


}

