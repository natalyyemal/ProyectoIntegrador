let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idAlbums = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/chart/0/albums" + idAlbums;

fetch(url)
    .then(function(response){
        return response.json();
    })
.then(function(datos){
        //Resolver que hacemos con los datos.
        console.log(datos);
        let inform = datos.data;
        let titlee = document.querySelector(".titulo");
        titlee.innerHTML += "<h1>"+  inform.title + "</h1>";
        let foto = document.querySelector(".weeknd");
        foto.src = inform.cover;
    }) 
.catch(function(error){
        console.log(error); 
    })