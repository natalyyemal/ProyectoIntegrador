//Esta es la primera parte, osea el "top artist" de las 3 columnas que tenemos en desktop
let proxy = "https://cors-anywhere.herokuapp.com/"; //El proxy es un permiso que se necesita pq sino te bloquea deezer y no te deja usarlo
let url = proxy + "https://api.deezer.com/chart/0/artists"; // aca en la url tiene que ir la url del api de deezer de lo que queremos trabajar

fetch(url)
.then(function(response){
    return response.json()
})
.then(function(datos){ // a la funcion le pones el nombre que quieras adentro. 
    console.log(datos); // haces el ocnsole.log de datos para ver que info te va a tirar la api 
    let artistas = datos.data; // esta variable te esta diciendo que la variable artistas, te va a dar todos los datos de la api, pero com
    let ul = document.querySelector(".artist");
    for (let i = 0; i < 10; i++) {
        ul.innerHTML += '<li><a href="detail.html?id=' + artistas[i].id + '"' + ' class="artist">' + artistas[i].name + '</a></li>';
    }
})
.catch(function(error){
    console.log(error);
})

let ruta = proxy + "https://api.deezer.com/chart/0/albums";

fetch(ruta)
.then(function(response){
    return response.json()
})
.then(function(dato){
    console.log(dato); 
    let album = dato.data;
    let ul = document.querySelector(".informacion");
    for (var i = 0; i < 10; i++) {
        ul.innerHTML += '<li><a href="albums.html?id=' + album[i].id + '"' + ' class="informacion">' + album[i].title + '</a></li>';
    }
})
.catch(function(error){
    console.log(error);
})


let link = proxy + "https://api.deezer.com/chart/0/tracks";

fetch(link)
.then(function(response){
    return response.json();
})
.then(function(info){
    console.log(info); 
    let tracks = info.data;
    let lista = document.querySelector(".track");
    for (var i = 0; i < 10; i++) {
        lista.innerHTML += '<li><a href="tracks.html?id=' + tracks[i].id + '"' + ' class="track">' + tracks[i].title + '</a></li>';
    }
})
.catch(function(error){
    console.log(error);
})

let fotos = proxy + "https://api.deezer.com/chart/0/albums";

fetch(fotos)
.then(function(datas){
    return datas.json()
})

.then(function(info){
    console.log(info); 
    let fotoss = info.data;
    let bandas = document.querySelector('.foto-bandas'); 
    let albums = ''; 
    for(let i=0; i<9; i++){
      albums += '<div class="fotos">'; 
      albums += '<a href= "detail.html?id=' + fotoss[i].id + '">'; 
      albums += '<img src="' + fotoss[i].cover + '" alt="' + fotoss[i].title + '">';
      albums += '</div>';
    }
    bandas.innerHTML = albums;
})
.catch(function(error){
    console.log(error);
})

let taza = proxy + "https://api.deezer.com/genre";

fetch(taza)
.then(function(vaso){
    return vaso.json();
})
.then(function(tapa){
    console.log(tapa);
    let genero = tapa.data;
    let lista = document.querySelector(".generos");
    for (var i = 1; i < 11; i++) {
        lista.innerHTML += '<li><a href="generos.html?id=' + genero[i].id + '"' + ' class="track">' + genero[i].name + '</a></li>';
    }
})


    
    

// let colum = proxy + "https://api.deezer.com/genre";

// fetch(ruta)
// .then(function(response){
//     return response.json()
// })
// .then(function(arg){
//     console.log(arg);
// })
// .catch(function(error){
//     console.log(error);
// })


// (".toggle").click(function()[
//     (".formulario").animate({
//         height: "toggle",
//         "padding-top": "toggle",
//         "padding-bottom": "toggle",
//         opacity: "toggle"
//     },"slow")
// ])
