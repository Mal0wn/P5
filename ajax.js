function ajaxPost(url, data) {
    // Fetch 
    fetch(url, {
        method:"POST",
       headers: {
            'Content-Type': 'application/json'
          }, 
        body: JSON.stringify(data)         // Renvoi l'objet posté sous forme de string
    }).then((resp) => resp.json())         // Prend la réponse => va chercher le contenu textuel
      .then(function(data){                // Prend le resultat de .then et send au callback
        let donnees = JSON.stringify(data);
        window.localStorage.setItem('datacmd', donnees);

    })
}




