function regSubmitHandler(e) {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const repeatPassword = document.getElementById("repeat-password").value;
    const date = new Date();
    date.setDate(date.getDate() + 1)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.match(emailPattern)) {
        alert('Введіть правильну адресу електронної пошти');
        return;
    }

    if (password !== repeatPassword) {
        alert('Паролі не співпадають');
        return;
    }

    document.cookie = `email=${email}; path=/; expires=${date.toString()}`;
    document.cookie = `password=${password}; path=/; expires=${date.toString()}`;
    console.log(email);
    document.location.href = "/";
}

function redirectToLoginPage() {
    window.location.href = "/Login";
}