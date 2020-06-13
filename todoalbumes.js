let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); 
let idAlbum = queryStringObj.get("id"); //con el método get obtenenemos el valor del término a buscar. En este obtenenemos lo que escribió el usuario en el campo de busqueda cuyo "name" es "search" (name="search").

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/search/album?q="+ idAlbum;

fetch(url)
.then(function(response){
    return response.json()
})

.then(function(info){
    console.log(info);
    let foto = info.data;
    let bandas = document.querySelector('.foto-bandas');
    let albums = ''; 
    for(let i=0; i<foto.length; i++){
      albums += '<div class="fotos">';  
      albums += '<a href= "detail.html?id=' + foto[i].id + '"' + '</a>';
      albums += '<img src="' + foto[i].picture + '" alt="' +  '">';
      albums += '</div>';
    }
    bandas.innerHTML = albums;

})


.catch(function(error){
    console.log(error);
})
