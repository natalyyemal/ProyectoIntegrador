// let proxy = 'https://cors-anywhere.herokuapp.com/';
// let url = proxy + 'https://api.deezer.com/chart/0/tracks';
let queryString = location.search;
let datos = new URLSearchParams (queryString);
// let idTrack = datos.get ('id');
// console.log(idTrack);

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + 'https://api.deezer.com/chart/0/tracks';

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let datos = data.data;
    let track = document.querySelector(".fotulis");
    let tracks = '';
    for(let i=0; i<9; i++){    
        tracks += '<li class="trackschart">';
        tracks +=       '<a class="overlay" href="tracks.html?id=' + datos[i].id + '">';
        tracks +=           '<img class="image" src="' + datos[i].artist.picture_medium+ '">';
        tracks +=        datos[i].title_short + '</a>';
        tracks += '</li>';
        // track.innerHTML += "</div>";
        // tracks += '<li>' + '<a  href="tracks.html?id='+ datos[i].id + '">'+ datos[i].title_short + '</a></li>'
    }
    // console.log(tracks);
    track.innerHTML += tracks;
})
.catch(function(error){
    console.log(error);
})