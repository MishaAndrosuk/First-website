function getCookies() {
    const cookie = document.cookie.split("; ");
    const res = {};

    for (let i = 0; i < cookie.length; i++) {
        const item = cookie[i].split("=");
        res[item[0]] = item[1];
    }

    return res;
} function getCookies() {
    const cookie = document.cookie.split("; ");
    const res = {};

    for (let i = 0; i < cookie.length; i++) {
        const item = cookie[i].split("=");
        res[item[0]] = item[1];
    }

    return res;
}

function loginSubmitHandler(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const cookies = getCookies();

    if (cookies.email === email && cookies.password === password) {
        document.location.href = "/";
    } else {
        alert('Невірний email або пароль');
    }
}

function redirectToRegisterPage() {
    window.location.href = "/Register";
}