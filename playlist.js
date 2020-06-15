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

/* <li><a href="audio/Post Malone - Big Lie lyrics.mp3" target="_blank"><img class="fotoartista" src="img/postmalone.jpg" alt="postmalone" srcset=""><img class="icono-play" src="img/logoplay.png" alt=""></a></li> 
<li> + '<a href="tracks.html?id=' + track.id + '">' + '<img src ="' + contributors.picture_small + '" alt="">' + track.title +'</a></li>';



*/

