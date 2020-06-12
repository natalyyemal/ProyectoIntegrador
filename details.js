let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idArtista = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/artist/" + idArtista;


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        //Resolver que hacemos con los datos.
        console.log(datos);
        let title = document.querySelector(".titulo");

        title.innerHTML += "<h1>"+  datos.name + "</h1>";
        let foto = document.querySelector(".weeknd");
        foto.src = datos.picture_small;
    }) 
    .catch(function(error){
        console.log(error); 
    })


let inform = proxy + "https://api.deezer.com/artist/" + idArtista + "/albums"

fetch(inform)
.then(function(datas){
    return datas.json()
})

.then(function(info){
    console.log(info); 
    let fotoss = info.data;
    let bandas = document.querySelector('.fotos');
    let albums = ''; 
    for(let i=0; i<6; i++){
      albums += '<div class="fotos">';  
      albums += '<img src="' + fotoss[i].cover + '" alt="' +  '">';
      albums += '</div>';
    }
    bandas.innerHTML = albums;
})
.catch(function(error){
    console.log(error);
})

let pros = proxy + "https://api.deezer.com/artist/" + idArtista + "/top";

fetch(pros)
.then(function(datas){
    return datas.json()
})

.then(function(popular){
    console.log(popular); 
    let cancion = popular.data;
    console.log(cancion);
    let tops = document.querySelector('.popularSong'); 
    for(let i=0; i<6; i++){
      tops += '<div class="container">';  
      tops += '<li class="popular-song">' + cancion[i].title + '</li>';
      tops += '</div>';
    }
    tops.innerHTML = songs;
})

.catch(function(error){
    console.log(error);
})