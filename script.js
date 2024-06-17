
const apiKey = "fe62d76f9ff044989bda5476b559c693"
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`

function register() {
    window.location.href = "/Register";
}

function login() {
    window.location.href = "/Login";
}


function createNews(news) {
    const body = document.getElementById("news");

    for (let i = 0; i < 10; i++) {
        const div1 = document.createElement("div");
        div1.setAttribute("class", "innews");
        
        const div2 = document.createElement("div");
        div2.setAttribute("class", "innewsblock");
        
        const div3 = document.createElement("div");
        div3.setAttribute("class", "innews-img");
        
        const img1 = document.createElement("img");
        img1.setAttribute("src", news.articles[i].urlToImage);
        img1.setAttribute("class", "img");
        div3.appendChild(img1);
        
        const div4 = document.createElement("div");
        div4.setAttribute("class", "text-content");
        
        const p = document.createElement("p");
        p.innerText = news.articles[i].description;

        const br = document.createElement("br");
        const a = document.createElement("a");
        a.setAttribute("class", "learn_more");
        a.innerText = "докладніше";
        
        const img2 = document.createElement("img");
        img2.setAttribute("src", "img/Arrow 1.png");
        
        a.appendChild(img2);
        p.appendChild(br);
        p.appendChild(a);
        div4.appendChild(p);
        
        div2.appendChild(div3);
        div2.appendChild(div4);
        div1.appendChild(div2);
        body.appendChild(div1);
    }
}



async function fetchCreateNews() {
    try {
        const response = await fetch(url);

        if (response.ok) {
            const news = await response.json();
            createNews(news);
        } else {
            console.log("Response was not ok ", response.statusText);
        }
    } catch (error) {
        console.log("fetch catch error. ", error);
    }
}

fetchCreateNews();

function films(){
    window.location.href = "/films"
}