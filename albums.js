let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString); //Obtenemos un objeto literal con toda la info de los parametros en la url
let idAlbums = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/album/" + idAlbums;

fetch(url)
    .then(function(response){
        return response.json();
    })
.then(function(datos){
        console.log(datos);
        let album = document.querySelector(".titulo");
        album.innerHTML = datos.title;
        let foto = document.querySelector(".weeknd");
        foto.src = datos.cover_big;
        let descrip = document.querySelector(".descripcion");
        descrip.innerHTML = datos.artist.name  + "<br>" + "Fans: " + datos.fans + "<br>" + "Fecha de Salida: " + datos.release_date; 
    })
.catch(function(error){
        console.log(error); 
    })


let ruta = proxy + "https://api.deezer.com/album/" + idAlbums + "/tracks"; 

fetch(ruta)
.then(function(datas){
    return datas.json()
})

.then(function(data){
    let cancion = data.data;
    let tops = document.querySelector('.popular-song'); 
    let toptracks = '';
    for(let i=0; i<5; i++){
      toptracks += '<li>' + cancion[i].title + '</li>';
    }
    tops.innerHTML+= toptracks;
})

.catch(function(error){
    console.log(error);
})
