let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idAlbums = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';

let url =  proxy + "https://api.deezer.com/album/" + idAlbums;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        //Resolver que hacemos con los datos.
        console.log(datos);
        let ar = arg.data;
        console.log(ar)
        
        let title = document.querySelector(".titulo");

        title.innerHTML += '<h1><a href="albums.html?id=' + idAlbums + '"' + ' class="titulo">' + ar.title + '</a></h1>';
        let foto = document.querySelector(".weeknd");
        foto.src = data.cover;
    }) 
    .catch(function(error){
        console.log(error); 
    })
