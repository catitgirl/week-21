const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const formAdd = true;


form.addEventListener('submit', e => {
    e.preventDefault();

    const passedChecks = checkInputs();
fetch("https://httpbin.org/post",
{
    method: 'POST',
    body: JSON.stringify(passedChecks),
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    
},
})
.then(response => response.json())
.then(passedChecks => {
    console.log(passedChecks);
})
.catch(error => console.log(error));
})


function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    if (usernameValue === '') {
        setErrorFor(username, 'Имя пользователя не заполнено');
        
    } else {
        setSuccessFor(username);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Email не заполнен');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Ошибка в email');
    } else {
        setSuccessFor(email);
    }

    if (passwordValue === '') {
        setErrorFor(password, 'Пароль не заполнен');
    } else {
        setSuccessFor(password);
    }

    if (password2Value === '') {
        setErrorFor(password2, 'Пароль не заполнен');
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Пароли не совпадают');
    } else {
        setSuccessFor(password2);
    }
    
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


