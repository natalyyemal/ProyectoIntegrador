
let queryString= location.search;
let queryStringObj = new URLSearchParams(queryString); 
let idArtista = queryStringObj.get("id"); 

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url =  proxy + "https://api.deezer.com/chart/0/artists";
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
      albums += '<a href= "detail.html?id=' + foto[i].id + '"' + '</a>';
      albums += '<img src="' + foto[i].picture_medium + '" alt="' +  '">';
      albums += '</div>';
      
    }

})
// let centrar = querySelector('.fotos');
// centrar.style.justifyContent = 'center';

.catch(function(error){
    console.log(error);
})
