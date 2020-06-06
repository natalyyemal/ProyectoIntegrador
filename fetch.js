let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idArtista = datos.get("name");

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/chart/0/artists" + idArtista


fetch(url)
    .then(function(response){
        return response.json();
    })

    .then(function(datos){
        // console.log(datos);
//         let url = datos.data
//         let img = document.querySelector('.gifRandom');
//         img.src = gifUrl;

//         let tituloGif = datos.data.title;
//         let titulo = document.querySelector('.title');
//         titulo.innerHTML += tituloGif;

        
//     })
//     .catch(function(error){
//         return console.log(error);
//     })

// let gifsTrending = 'https://api.giphy.com/v1/gifs/trending?api_key=PuhlljnIs04eW2ezoSHpJ6Fov6102e4T&limit=5&rating=G';

// fetch(gifsTrending)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(datos){
//         console.log(datos.data);
//         let listaDeGifs = datos.data
//         // let urlImg = data.images.original.url
//         let lista = document.querySelector('.lista');
//         let contenido = '';

//         listaDeGifs.forEach(function(gif){
//             // lista.innerHTML += '<li>' + '<img src="' + gif.images.original.url +'">' + '</li>' //Opción uno.

//             contenido += '<li>';
//             contenido +=        '<p>' + gif.title + '</p>'
//             contenido +=        '<img src="' + gif.images.original.url + '">';
//             contenido += '</li>'
//         })
//         console.log(contenido);
//         lista.innerHTML = contenido;
        
//     })
//     .catch(function(error){
//         console.log(error);
        
//     })
