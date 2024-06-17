const params = new URLSearchParams(window.location.search);
const filmId = params.get('id');
const apikey = "75acce84";
const url = `https://www.omdbapi.com/?apikey=${apikey}&i=${filmId}`;

const poster = document.getElementById("poster");
const title = document.getElementById("title");
const year = document.getElementById("year");
const plot = document.getElementById("plot");

fetch(url)
    .then(response => response.json())
    .then(data => {
        if (data.Response === "True") {
            poster.src = data.Poster !== "N/A" ? data.Poster : "images/noimage.jpg";
            title.innerText = `Title: ${data.Title}`;
            year.innerText = `Year: ${data.Year}`;
            plot.innerText = `Plot: ${data.Plot}`;
        } else {
            alert(data.Error);
        }
    })
    .catch(error => console.error('Error:', error));


function back(){
    window.location.href = "/films"
}    