
     
let panier = JSON.parse(localStorage.getItem('panier'));


if(localStorage.getItem('panier')){
    var count = document.querySelector("#count");
    count.classList.add('count');                                       // rajout de classe pour le CSS
    document.querySelector("#count").textContent =  panier.length ;        
}


    

