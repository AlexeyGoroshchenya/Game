"use strict";

let target;
let ansver;

let makeTarget = function () {
    return target = (Math.trunc(Math.random() * 100)) + 1;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


const checkAnswer = function () {

    let toMach = target < ansver;
    let toFew = target > ansver;
    let uncorrectData = !isNumber(ansver) || parseInt(ansver) <= 0 || parseInt(ansver) > 100;


    if (toMach) {
        return 'Загаданное число меньше';
    } else if (toFew) {
        return 'Загаданное число больше';
    } else if (uncorrectData) {
        return "Введите число!";
    }
}

const game2 = function (x) {

    let i = 1;

    const b = function (ind) {


        if (ind == 1) {
            ansver = prompt('Угадайте число от 1 до 100!');
        } else {
            ansver = prompt(checkAnswer());
        }
        console.log(ind);

        if (ansver === null) {
            alert("game over");
            return;
        } else {
            if (x != ansver) {
                ind++;
                b(ind++);
            } else {
                alert("you win");
            }
        }

    }
    b(i);
}
target = makeTarget();
game2(target);