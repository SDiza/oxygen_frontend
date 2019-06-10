function task1() {
    var js = prompt("Какое официальное название JavaScript?");
    if (js == "ECMAScript"){
        alert("Верно!");
    } else {
        alert("Не знаете? ECMAScript!");
    }
}

function task2() {
    var num = prompt("Введите число!");
    if (num > 0){
        alert(1);
    } else if (num < 0) {
        alert(-1);
    } else {
        alert(0);
    }

}

function task3() {
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

function f() {
    
}