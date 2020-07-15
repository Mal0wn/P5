let selectedTeddy = getSelectedTeddy();

function initPage () {
    
    var nameTeddy = document.getElementsByClassName("title_teddy");    //recupérer elt qui porte name teddy

    if (nameTeddy.length > 0) {                                        // elimine code err if not good html
        nameTeddy[0].innerHTML = selectedTeddy.name;                   // affecte nom name teddy a l'elt
    }

    var picTeddy = document.getElementsByClassName("img_produit");     // recuperer elt qui porte l'img 

    if (picTeddy.length > 0) {
       
        picTeddy[0].src = selectedTeddy.imageUrl;
    }

    var descripTeddy = document.getElementsByClassName("description"); // recuperer elt qui porte la description

    if (descripTeddy.length > 0) {
        descripTeddy[0].textContent = selectedTeddy.description;
    }


    var select = document.getElementById("choosecolor_id");             // pour chaque teddy selectionné il genere les couleurs du teddy selectionné

    for (let color of selectedTeddy.colors) {
        var eltCol = document.createElement('option');
        eltCol.setAttribute("value", color);
        eltCol.textContent = color;
        if (select) {
            select.appendChild(eltCol);
        }
    }


    if (document.getElementById("div_price")) {

        // recuperer elt span qui va porter le prix
        var paraprice = document.createElement("p");
        paraprice.id = "para_price_id";
        paraprice.textContent = "Prix : " + selectedTeddy.price + "€";

        document.getElementById("div_price").appendChild(paraprice);    //ajout du p paraprice à la div div_price
    }
}

function getSelectedTeddy() {
    // recup l'url de la page
    var url_string = window.location.search;
    

    //ici on remplace ds la chaine de caractere '?id=' par rien du tout ''
    var c = url_string.replace('?id=', '');

    //ensuite appel api, pour recuperer le bon teddy grâce a l'id

    ajaxGet("http://localhost:3000/api/teddies/"+ c , function (response) {
        selectedTeddy = response; 
        

        // init page

        initPage ();
        }
    )
}




// parce comme on a deja le bon teddy selectionné , on evite de refaire un appel a l'api pour demander encore des infos



let addToCart = document.getElementById("addtocart_id");              //recupérer le btn input addtocart

addToCart.addEventListener("click", addToBasket);                     // crea evnt click btn 

function addToBasket() {

    let selectColor = document.getElementById("choosecolor_id");
    let valueColor = selectColor[selectColor.selectedIndex].value;
    let inputQte = document.getElementById("qte_id").value;

    
    //Json parse pour pouvoir plus facilement travailler avec ce qu'on reçoit du localStorage
    var panier = JSON.parse(localStorage.getItem('panier'));
    
    //on créer un objet qu'on va stocker ds le localStorage avec les infos donnés par l'utilisateur recuperer juste au dessus
    
    var newPanier = {
        'id': selectedTeddy._id,
        'color': valueColor,
        'quantité': inputQte, 
        'price' : selectedTeddy.price ,
        'pict' : selectedTeddy.imageUrl,
        'name' : selectedTeddy.name,
    };
    // si encore rien ds le panier, le panier est vide donc null, si il est null il faut creer un tableau vide
    if (panier === null) {
        panier = [];
    }
    //on ajoute dans le panier l'objet qui porte les infos utiles 
    panier.push(newPanier);

    // on écrase l'ancienne valeur du panier, mais comme on l'a recupérer avt et qu'avec push on ajoute qqch sans ecraser les valeurs deja presente, on ne perds pas d'info
    localStorage.setItem('panier', JSON.stringify(panier));
    window.location.href = "index.html" ; 

}



