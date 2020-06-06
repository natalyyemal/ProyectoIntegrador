let queryString = location.search;
let searchParams = new URLSearchParams(queryString);
let idArtista = searchParams.get("name");
let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/search/artist?q=" + idArtista;
 
fetch(url)
.then(function(response){
    return response.json()
})
.then(function(datos){
    console.log(datos.name);
    let artista = datos.name;
    let artist = document.querySelector(".artist");
artista.forEach(function(artista){
        artist.innerHTML += "<li>" + datos.name + "</li>";
    })
})
.catch(function(error){
    console.log(error);
})
