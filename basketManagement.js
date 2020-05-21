console.log(localStorage); 


let addToCart = document.getElementById("addtocart_id");   //recupérer le btn input addtocart

addToCart.addEventListener("click", addToBasket);						// crea evnt click btn 

function addToBasket() {

	let selectColor = document.getElementById("choosecolor_id");
	let valueColor = selectColor[selectColor.selectedIndex].value;
	let inputQte = document.getElementById("qte_id").value;

console.log(valueColor);
console.log(inputQte);
console.log(document.getElementById("qte_id"));
console.log(document.getElementById("choosecolor_id"))

localStorage.setItem('qte1', inputQte);
localStorage.setItem('color1', valueColor);

console.log(localStorage);

}





/*  

-mettre une clef qui incremente ? 


localStorage.setItem('user', JSON.stringify(user));                   Then to retrieve it from the store and convert to an object again:    prendre l'item (teddy) et le convertir en objet 
var user = JSON.parse(localStorage.getItem('user'));                  If we need to delete all entries of the store we can simply do:          
localStorage.clear()



/*