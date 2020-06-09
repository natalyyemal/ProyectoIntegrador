let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idArtista = queryStringObj.get("search"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/search/artist?q=" + idArtista;


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        //Resolver que hacemos con los datos.
        console.log(datos);
        let nombres = datos.data;
        let title = document.querySelector(".titulo");
        title.innerHTML=nombre.name;
       
        
        
    })
    .catch(function(error){
        console.log(error);
        
    });