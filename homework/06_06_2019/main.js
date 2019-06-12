function askJS() {
    var js = prompt("Какое официальное название JavaScript?");
    if (js == "ECMAScript"){
        alert("Верно!");
    } else {
        alert("Не знаете? ECMAScript!");
    }
}

function checkNumbers() {
    var num = +prompt("Введите число!");
    if (num > 0){
        alert(1);
    } else if (num < 0) {
        alert(-1);
    } else {
        alert(0);
    }

}

function logIn() {
    var login = prompt("Кто пришел?");
    if (login == "Админ"){
        var pass = prompt("Пароль?");
        if (pass == "Черный Властелин"){
            alert("Добро пожаловать!");
        } else if (pass == null){
            alert("Вход отменен");
        } else {
            alert("Пароль неверный");
        }

    } else if (login == null){
        alert("Вход отменен");
    } else {
        alert("Я вас не знаю");
    }

}

function showMessage() {
        login = prompt('Введите логин');
        var message = (login == 'Вася') ? 'Привет':
            (login == 'Директор')? 'Зравствуйте' :
                (login == '') ? 'нет логина': '';
        alert(message);
}