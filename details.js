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
        foto.src = datos.picture_big;
        let descrip = document.querySelector(".descripcion");
        descrip.innerHTML = '<a href="tracks.html?id='+ title.id + '">' + datos.name + '</a>';  
        //+ "<br>" + "Fans: " + datos.nb_fan + "<br>" + "Nb Album: " + datos.nb_album;
        descrip.innerHTML +="<br>" + "Fans: " + datos.nb_fan + "<br>" + "Nb Album: " + datos.nb_album;
    }) 
    .catch(function(error){
        console.log(error); 
    })
    //'<a href="track.html?id='+ title.id + '">' + datos.name + '</a>'+ ' 
    // probe estos pero no sale
    // '<h1>' + '<a href="track.html?id='+ title.id+ '">'+ datos.name + '</a></h1>' 
    // '<h1>' + '<a href="tracks.html?id='+ title.id+ '"</a>'+ datos.name + '</h1>'

let inform = proxy + "https://api.deezer.com/artist/" + idArtista + "/albums"

fetch(inform)
.then(function(datas){
    return datas.json()
})

.then(function(info){
    console.log(info); 
    let fotoss = info.data;
    let bandas = document.querySelector('.foto-albumes');
    let albums = ''; 
    for(let i=0; i<6; i++){
      albums += '<div class="fotos">'; 
      albums += '<a href="albums.html?id=' + fotoss.idArtista + '">';
      albums += '<img src="' + fotoss[i].cover + '" alt="' +  '">' + '</a>';
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
    let cancion = popular.data;
    let tops = document.querySelector('.popular-song'); 
    let toptracks = '';
    for(let i=0; i<5; i++){
      toptracks += '<li>' + cancion[i].title + '</li>';
      console.log(toptracks);
    }
    tops.innerHTML+= toptracks;
})

.catch(function(error){
    console.log(error);
})

let info = proxy + "https://api.deezer.com/album/" + idArtista + "/tracks";

fetch(info)
.then(function(responde){
    return responde.json()
})

.then(function(album){
    let informa = album.data;
    console.log(informa);
    let canciones = document.querySelector('.after-hrs');
    let albumcompleto = '';
    for (let i=0; i<informa.length; i++){
        albumcompleto += '<li>' + informa[i].title + '</li>';
    } 
    canciones.innerHTML += albumcompleto;
    
})
.catch(function(error){
    console.log(error);
})

//No estoy pudiendo poner la foto noc que estoy haciendo mal
let fotos = proxy + "https://api.deezer.com/album/" + idArtista;
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(respon){
    console.log(respon);
    let inform = respon.data;
    let photo = document.querySelector(".after-hours");
    photo.src = respon.cover;
}) 

.catch(function(error){
    console.log(error); 
})