
let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); 
let idAlbums = queryStringObj.get("id"); 

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/chart/0/albums";
fetch(url)
.then(function(response){
    return response.json()
})

.then(function(info){
    console.log(info);
    let foto = info.data;
    let bandas = document.querySelector('.foto-bandas');
    let albums = ''; 
    for(let i=0; i<9; i++){
      albums += '<div class="fotos">';  
      albums += '<a href= "detail.html?id=' + foto[i].artist.id + '">';
      albums += '<img class= "fotito" src="' + foto[i].cover_medium + '" alt="' +  '">';
      albums += '<li class= nombres>' + foto[i].artist.name + '</li></a>'
      albums += '</div>';
    }
    bandas.innerHTML = albums;

})

.catch(function(error){
    console.log(error);
})

