// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    // Fetch 
    fetch(url, {
        method:"GET"
    }).then((resp) => resp.text())         // Prend la réponse => va chercher le contenu textuel
      .then(function(data){                // Prend le resultat de .then et send au callback
        console.log(data);
        callback(JSON.parse(data));        // Transformation JSON 

    })
}

function ajaxPost(url, callback, data) {
    // Fetch 
    fetch(url, {
        method:"POST",
        body: JSON.stringify(data)         // Renvoi l'objet posté sous forme de string
    }).then((resp) => resp.text())         // Prend la réponse => va chercher le contenu textuel
      .then(function(data){                // Prend le resultat de .then et send au callback
        console.log(data);
        callback(JSON.parse(data));        // Transformation JSON 

    })
}



