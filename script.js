"use strict";


const makeTarget = function () {
    let target = (Math.trunc(Math.random() * 100)) + 1;
    return target;
}


const game2 = function (target, ind) {

    let ansver = 0;
    let restartQuestion = false;
    let uncorrectData = false;

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

    const isNumber = function (num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    }

    const startGameCycle = function () {

        if (ind == 1) {

            if (!uncorrectData) {

                console.log(target);// это тут не нужно. но проверять легче когда оно есть
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
                    startGameCycle(ind);
                }

            } else {
                restartQuestion = confirm('Вы выиграли. Хотите еще раз сыграть?');
                return restartQuestion;
            }
        }

    }

    startGameCycle(1);
    console.dir(startGameCycle)

    if (restartQuestion) {

        game2(makeTarget(), 1);
    } else {
        return;
    }

}

game2(makeTarget(), 1);




