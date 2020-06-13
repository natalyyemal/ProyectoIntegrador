let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idGenero = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
// let url = proxy + "https://api.deezer.com/album/" + idAlbums;

let nombres = proxy + "https://api.deezer.com/genre/" + idGenero;

fetch(nombres)
.then(function(responde){
    return responde.json()
})
.then(function(dato){
    console.log(dato);
    
    let genre = document.querySelector(".titulo");
        genre.innerHTML = '<h1>' + dato.name + '</h1>';
        let foto = document.querySelector(".weeknd");
        foto.src = dato.picture_big;
})
.catch(function(error){
    console.log(error);
})

let url = proxy + "https://api.deezer.com/genre/" + idGenero + "/artists";

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(genero){
    let nom = genero.data;
    console.log(nom);
    let listado = document.querySelector('.foto-bandas'); 
    let albums = ''; 
    for(let i=0; i<9; i++){
      albums += '<div class="fotos">'; 
      albums += '<a href= "detail.html?id=' + nom[i].id + '">'; 
      albums += '<img src="' + nom[i].picture + '" alt="' + nom[i].name + '">';
      albums += '<li class= nombres>' + nom[i].name + '</li>';
      albums += '</div>';
    }

    listado.innerHTML = albums;
})


.catch(function(error){
    console.log(error);
})


