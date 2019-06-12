function showEvenNumbers() {
    for (var i = 2; i < 10; i++){
        if (i % 2 == 0){
        alert(i);}
    }
}

function fromForToWhile() {
    var i = 0;
    while(i < 3){
        alert("Номер " + i + "!");
        i++;
    }
    // ТОЖЕ САМОЕ ЧТО И
    // for (var i = 0; i < 3; i++){
    //     alert("Номер " + i + "!");
    // }
}

function inputMoreHundredNum() {
    var num = 0;

    while (num < 100) {
        num = +prompt("Введите число, которое > 100");
        if (num == false) alert("Отмена");
        break;
    } alert("Конец");
}

function simpleNumbers(){
    nextNum:
    for (var i = 2; i <= 10; i++){
        for (var n = 2; n < i; n++){
            if (i%n == 0) continue nextNum;
        }
        alert(i);
    }
}