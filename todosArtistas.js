
let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); 
let idArtista = queryStringObj.get("id"); 

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/search/artist?q=" + idArtista;

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
