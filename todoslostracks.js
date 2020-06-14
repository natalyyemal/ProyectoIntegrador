let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/chart/0/tracks';

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let datos = data.data;
    let track = document.querySelector(".foto-bandas");
    let tracks = "";
    for(let i=0; i<9; i++){
        tracks += "<div class = 'fotos'>";
        tracks += "<a href = 'tracks.html?id=" + datos[i].id + "'" + "</a>";
        tracks += "<img src='" + datos[i].cover_medium + "' alt= ' " + "'>";
        tracks += "</div>";
    }
    track.innerHTML = tracks
})
.catch(function(error){
    console.log(error);
})