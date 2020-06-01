let addToCart = document.getElementById("clearPanier"); //recupérer le btn nettoayge panier

addToCart.addEventListener("click", clearLocalStorage); // crea evnt click btn 

function clearLocalStorage() {
    localStorage.clear();
    console.log("Panier vidé: ", localStorage);
}