console.log("hola")
let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idArtista = datos.get("name");

let proxy = "https://cors-anywhere.herokuapp.com/";
let url = proxy + "https://api.deezer.com/chart/0/artists" + idArtista