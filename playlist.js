// Playlist

let recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);

let playlistWrapper = document.querySelector('.playlistWrapper');
console.log(recuperoStorage);
if(recuperoStorage == null || recuperoStorage == "[]"){
    playlist = [];
    playlistWrapper.innerHTML += '<li> No hay canciones en tu playlist </li>'
    console.log(playlistWrapper);

} else {

    playlist.forEach(function(idTrack){
        buscarYMostrarTrack(idTrack);
    });
}

function buscarYMostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + 'https://api.deezer.com/track/' + idTrack;

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (track) {
            let boton = document.querySelector('.agregar')
            playlistWrapper.innerHTML += '<li>'; 
            playlistWrapper.innerHTML += '<img class= "fotitoPlaylist" src="' + track.artist.picture_small + '">' + '<a class="nombresPlay" href="tracks.html?id=' + track.id + '">' + track.title + '</a></li>';
            // SE FUE EL HREF NO SE Q HACERRRRRR
        })
        .catch(function(errors){
            console.log(errors);

        })
};

let quitar = document.querySelector('.quitar');
// quitar.onclick('click', function(){
//     localStorage.clear();
// })
quitar.addEventListener('click', function(){
    localStorage.clear();
})

function eliminar (){
    localStorage.clear();
}
quitar.onclick = eliminar;
quitar.onclick



