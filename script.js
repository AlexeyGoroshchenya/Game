"use strict";

let target = 0;
let ansver = 0;
let uncorrectData = false;

let makeTarget = function () {
    return target = (Math.trunc(Math.random() * 100)) + 1;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const checkAnswer = function () {

    let toMach = target < ansver;
    let toFew = target > ansver;

    if (uncorrectData) {
        return "Введите число!";
    } else if (toFew) {
        return 'Загаданное число больше.';
    } else if (toMach) {
        return 'Загаданное число меньше.';
    }
}

const game2 = function (targetValue) {

    const startGameCycle = function (ind) {

        if (ind == 1) {

            if (!uncorrectData) {
                console.log(target);// это тут не нужно. но проверять легче когда оно есть
                ansver = prompt('Угадайте число от 1 до 100!');
            } else {
                ansver = prompt(checkAnswer());
            }

            uncorrectData = !isNumber(ansver) || parseInt(ansver) <= 0 || parseInt(ansver) > 100;
        } else {
            ansver = prompt(checkAnswer());

            uncorrectData = !isNumber(ansver) || parseInt(ansver) <= 0 || parseInt(ansver) > 100;
        }


        if (ansver === null) {
            alert("game over");
            return;
        } else {
            if (targetValue != ansver) {

                if (uncorrectData) {
                    startGameCycle(ind, uncorrectData);
                } else {
                    ind++;
                    startGameCycle(ind++);
                }
            } else {
                alert("you win");
            }
        }

    }
    startGameCycle(1);
}
target = makeTarget();
game2(target);