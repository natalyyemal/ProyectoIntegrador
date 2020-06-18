window.addEventListener('load', function(){
    let loader = document.querySelector('.loader');
    loader.style.display = 'none';
})
let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url



let option = queryStringObj.get('option');
let idArtista = queryStringObj.get("search"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").
let arrayOpciones = document.querySelectorAll('.option');

let search = queryStringObj.get('search');

let proxy = "https://cors-anywhere.herokuapp.com/";
let urltracks = proxy + 'https://api.deezer.com/search/' + option + '?q=' + search;

// let proxy = 'https://cors-anywhere.herokuapp.com/';
// let url =  proxy + "https://api.deezer.com/search/artist?q=" + idArtista;


// fetch(url)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(datos){
//         //Resolver que hacemos con los datos.
//         console.log(datos);
//         let lista = document.querySelector('.lista');
//         let info = datos.data;  
//         info.forEach(function(resultado){
//         lista.innerHTML += '<li class= "resultados">' + '<a href="detail.html?id=' + resultado.id + '">' + resultado.name + '</a></li>';
//         }); 
//     })
//     .catch(function(error){
//         console.log(error);
        
//     });

    window.addEventListener('load', function() { //este event listener cubre todo lo que se va a buscar

    
        if(search !== null){
            // showSpinner() // ejecuta la funcion spinner SOLO cuando busco algo
        
            let searchResults = document.querySelector('.display-resultados');
            //searchResults.innerHTML += 'Resultados de Busqueda...'; --> creo que queda más bello sin esto, pero lo dejo a tu criterio jeje
        
            // let detailContainer = document.querySelector('.main-detail-containter');
            // detailContainer.style = 'padding: 10px 0px;'
            fetch(urltracks)
            .then(function(response){
                return response.json();
            })
            .then(function(datos){
                let lista = document.querySelector('.lista')
                let resultados = datos.data;
        
                lista.innerHTML = "";
        
                if (option == 'track'){
                    resultados.forEach(resultado => { 
                        // lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id=' + resultado.id + '&type='+ resultado.type + '" class="a-song">'+ '<img src="'+ resultado.album.cover + '" class="search-img">'+ '<div class="song-text"><h4 class="text-a">' + resultado.title + ' </h4><p class="text-b">' + resultado.artist.name + '</p></div>'+ '<i class="material-icons">more_horiz</i>' +'</a></li>'
                        lista.innerHTML += '<li class= "resultados">' + '<a href="detail.html?id="' + resultado.id + '&type='+ resultado.type + '" class="a-song">' + resultado.title + '</a></li>';
                    });
                }
                if (option == "album"){
                    resultados.forEach(resultado => { 
                        resultados.forEach(resultado => {
                            // lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id='+ resultado.id +'&type='+ resultado.type + '" class="a-song">' + '<img src="' +  resultado.cover  + '" class="search-img">'+ '<div class="song-text"><h4 class="text-a">' + resultado.title + '</h4><p class="text-b">'+ resultado.artist.name + '</p></div>' + '<i class="material-icons">keyboard_arrow_right</i>' + '</a></li>';

                            lista.innerHTML += '<li class= "resultados">' + '<a href="detail.html?id="' + resultado.id + '&type='+ resultado.type + '" class="a-song">' + resultado.title + '</a></li>';
                        });
                    });
                }
                if (option == "artist") {
                    resultados.forEach(resultado => {
                        // lista.innerHTML += '<li class="track-search-list"><a href="generaldetail.html?id='+ resultado.id + '&type=' + resultado.type + '" class="a-song">' + '<img src="' + resultado.picture + '" class="rounded-img">' + '<div class="song-text"><h4 class="text-a">' + resultado.name + '</h4></div>' + '<i class="material-icons">keyboard_arrow_right</i>' + '</a></li>';

                        lista.innerHTML += '<li class= "resultados">' + '<a href="detail.html?id="' + resultado.id + '&type='+ resultado.type + '" class="a-song">' + resultado.name + '</a></li>';
                    });
                }
                // hideSpinner(); //oculta el spinner cuando termina de cargar
            })
            .catch(function(error){
                console.log(error)
            })
        }
        
        })



























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