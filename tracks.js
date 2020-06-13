let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idTracks = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/track/" + idTracks;

fetch(url)
    .then(function(response){
        return response.json();
    })
.then(function(datos){
        console.log(datos);
        let album = document.querySelector(".titulo");
        album.innerHTML = datos.title;
        let foto = document.querySelector(".weeknd");
        foto.src = datos.album.cover_big;
        let descrip = document.querySelector(".descripcion");
        descrip.innerHTML = datos.artist.name  + "<br>" + "Duración: " + datos.duration + "<br>" + "Nombre del Álbum: " + datos.album.title; 


    })
.catch(function(error){
        console.log(error); 
    })


