const filmContainer = document.getElementById("film");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const apikey = "75acce84";
const baseUrl = `https://www.omdbapi.com/?apikey=${apikey}&s=`;
let currentPage = 1;
let currentSearchTitle = '';
let currentSearchType = '';

const request = new XMLHttpRequest();

const setPageData = (films) => {
    filmContainer.innerHTML = "";
    films.forEach(film => {
        const filmItem = document.createElement("div");
        filmItem.classList.add("film-item");
        
        const filmPoster = document.createElement("img");
        filmPoster.setAttribute("src", film.Poster !== "N/A" ? film.Poster : "images/noimage.jpg");
        
        const filmTitle = document.createElement("div");
        filmTitle.innerText = `Title: ${film.Title}`;
        
        const filmYear = document.createElement("div");
        filmYear.innerText = `Year: ${film.Year}`;
        
        const detailsButton = document.createElement("button");
        detailsButton.innerText = "Details";
        detailsButton.onclick = () => window.location.href = `details/index.html?id=${film.imdbID}`;
        
        filmItem.appendChild(filmPoster);
        filmItem.appendChild(filmTitle);
        filmItem.appendChild(filmYear);
        filmItem.appendChild(detailsButton);
        
        filmContainer.appendChild(filmItem);
    });
};

request.onload = () => {
    if (request.status === 200) {
        const response = JSON.parse(request.response);
        if (response.Response === "True") {
            setPageData(response.Search);
            updatePagination(response.totalResults);
        } else {
            filmContainer.innerHTML = "";
            prevButton.disabled = true;
            nextButton.disabled = true;
        }
    }
};

const updatePagination = (totalResults) => {
    const totalPages = Math.ceil(totalResults / 10);
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
};

const searchFilms = () => {
    let searchUrl = `${baseUrl}${currentSearchTitle}&page=${currentPage}`;
    if (currentSearchType) {
        searchUrl += `&type=${currentSearchType}`;
    }
    request.open("GET", searchUrl);
    request.send();
};

function searchFilmHandler() {
    const titleInput = document.getElementById("title");
    const typeInput = document.getElementById("type").value;
    currentSearchTitle = titleInput.value;
    currentSearchType = typeInput;
    currentPage = 1;
    searchFilms();
}

function nextPage() {
    currentPage++;
    searchFilms();
}

function prevPage() {
    currentPage--;
    searchFilms();
}

function news() {
    document.location.href = "/"
}

function register() {
    window.location.href = "/Register";
}

function login() {
    window.location.href = "/Login";
}