const listeTeddies = [{"colors":["Tan","Chocolate","Black","White"],"_id":"5be9c8541c9d440000665243","name":"Norbert","price":2900,"imageUrl":"http://localhost:3000/images/teddy_1.jpg","description":"azrmofi ham oiahz fmoasihfasmdoi fhadsmofi hasmo ifahdsmo fiasdh miodash"},
{"colors":["Pale brown","Dark brown","White"],"_id":"5beaa8bf1c9d440000a57d94","name":"Arnold","price":3900,"imageUrl":"http://localhost:3000/images/teddy_2.jpg","description":"amoif  azomifhazoeimfhazeoi zeoifh ozimf hazeoimfehzoifhaz"},
{"colors":["Brown"],"_id":"5beaaa8f1c9d440000a57d95","name":"Lenny and Carl","price":5900,"description":"sdamoifh asd fomiazhf mozihfomzif hamozihefo miazh fmoaizh ","imageUrl":"http://localhost:3000/images/teddy_3.jpg"},
{"colors":["Brown","Blue","Pink"],"_id":"5beaabe91c9d440000a57d96","name":"Gustav","price":4500,"imageUrl":"http://localhost:3000/images/teddy_4.jpg","description":"oamsih azmo ihzaefmo iazehfmo iazeomfihaz ioza "},
{"colors":["Beige","Tan","Chocolate"],"_id":"5beaacd41c9d440000a57d97","name":"Garfunkel","price":5500,"description":"asdfmio a zmeofihazeoimfhazeomifh maoziehf maoizhe moaziehf moiazeh omzefh ","imageUrl":"http://localhost:3000/images/teddy_5.jpg"}];
console.log(listeTeddies);


listeTeddies.forEach(function(ours) {
	var bear = document.createElement("li");       // Création d'un élément li
	var picBear = document.createElement("img");   // creation de l'elt img
	picBear.classList.add('picted');               //ajout de class a img
	picBear.setAttribute('src',ours.imageUrl);     // ajout d'attribut src a img & son emplacement
	var oursName = document.createElement("div");  // creation de la div pour le name
	oursName.classList.add('name');                // ajout de class name a la div
	oursName.textContent = ours.name;			   // Donner le texte "name" du tableau a oursName
	var oursPrice = document.createElement("div"); // creation de la div pour le prix
	oursPrice.classList.add('price');              // ajout de la class a la div prix
	oursPrice.textContent = ours.price;			   // donner le texte "price" du tableau a oursPrice

	bear.appendChild(picBear);                     //ajout des 3 elt créés dans le li 
	bear.appendChild(oursName);
	bear.appendChild(oursPrice);

	document.getElementById("list_items").appendChild(bear); //ajout de li dans la class list_items(ul)

});



