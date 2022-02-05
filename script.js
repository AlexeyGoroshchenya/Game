"use strict";

let target = 0;
let ansver = 0;
let restartQuestion = false;
let uncorrectData = false;

const makeTarget = function () {
    return target = (Math.trunc(Math.random() * 100)) + 1;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}

const checkAnswer = function () {

    let toMach = (target < ansver);
    let toFew = (target > ansver);

    if (uncorrectData) {
        return "Введите число!";
    } else if (toFew) {
        return 'Загаданное число больше.';
    } else if (toMach) {
        return 'Загаданное число меньше.';
    }
}

const game2 = function () {

    let index = 1;

    const startGameCycle = function (ind) {

        if (ind == 1) {

            if (!uncorrectData) {
                makeTarget();
                ansver = prompt('Угадайте число от 1 до 100!');
            } else {
                ansver = prompt(checkAnswer() + ` У вас осталось ${11 - ind} попыток`);
            }

            uncorrectData = !isNumber(ansver) || parseInt(ansver) <= 0 || parseInt(ansver) > 100;

        } else if (ind == 11) {
            restartQuestion = confirm('Попытки закончились, хотите сыграть еще?');

            return restartQuestion;
        } else {
            ansver = prompt(checkAnswer() + ` У вас осталось ${11 - ind} попыток`);
            uncorrectData = !isNumber(ansver) || parseInt(ansver) <= 0 || parseInt(ansver) > 100;
        }

        if (ansver === null) {
            alert("game over");
            return;
        } else {
            if (target != ansver) {
                if (uncorrectData) {
                    startGameCycle(ind, uncorrectData);
                } else {
                    ind++;
                    startGameCycle(ind++);
                }

            } else {
                restartQuestion = confirm('Вы выиграли. Хотите еще раз сыграть?');
                return restartQuestion;
            }
        }

    }

    startGameCycle(index);

    if (restartQuestion) {
        makeTarget();
        startGameCycle(index);
    } else {

        return;
    }
}

game2();