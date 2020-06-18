window.addEventListener('load', function(){
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';
})
let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idArtista = queryStringObj.get("search"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").
// let option = queryStringObj.get('option');
// // Mantener en el html la opción seleccionada

// // Mantener en el html la opción seleccionada
// // 1 capturamos todas los campos input de tipo radio button.
// let arrayOpciones = document.querySelectorAll('.option');
// // Recorremos el array de radio buttons y le colocamos el atributo checked al input que coinicde con el valor de "option" que está en la url.
// arrayOpciones.forEach(function(unaOpcion){
//     if(option == unaOpcion.value){
//         unaOpcion.checked = true
//     }
// })

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/search/artist?q=" + idArtista;


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        //Resolver que hacemos con los datos.
        console.log(datos);
        let lista = document.querySelector('.lista');
        let info = datos.data;  
        info.forEach(function(resultado){
        lista.innerHTML += '<li class= "resultados">' + '<a href="detail.html?id=' + resultado.id + '">' + resultado.name + '</a></li>';
        }); 
    })
    .catch(function(error){
        console.log(error);
        
    });


    // let search = queryStringObj.get('search');

    // let proxy = "https://cors-anywhere.herokuapp.com/";
    // let filtrourl = proxy + 'https://api.deezer.com/search/' + option + '?q=' + search;
           
    
    //     fetch(filtrourl)
    //     .then(function(response){
    //         return response.json();
    //     })
    //     .then(function(datos){
    //         let lista = document.querySelector('.lista');
    //         let resultados = datos.data;
    
    //         // lista.innerHTML += "";
    
    //         if (option == 'track'){
    //             resultados.forEach(resultado => { 
    //                 lista.innerHTML += '<li class= "resultados">' + '<a href="tracks.html?id=' + resultado.id + '&type='+ resultado.type + '">' + resultado.name + '</a></li>';             
    //             });
    //             // resultados.forEach(resultado => { 
    //             //     lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id=' + resultado.id + '&type='+ resultado.type + '" class="a-song">'+ '<img src="'+ resultado.album.cover + '" class="search-img">'+ '<div class="song-text"><h4 class="text-a">' + resultado.title + ' </h4><p class="text-b">' + resultado.artist.name + '</p></div>'+ '<i class="material-icons">more_horiz</i>' +'</a></li>'
             
    //         }
    //         if (option == "album"){
    //             resultados.forEach(resultado => { 
    //                 lista.innerHTML += '<li class= "resultados">' + '<a href="albums.html?id=' + resultado.id + '">' + resultado.name + '</a></li>';
    //                 });
    //         }
    //         if (option == "artist") {
    //             resultados.forEach(resultado => {
    //                 lista.innerHTML += '<li class= "resultados">' + '<a href="detail.html?id=' + resultado.id + '">' + resultado.name + '</a></li>';
    //             })
    //         }
    //     })
    //     .catch(function(error){
    //         console.log(error);
    //     })