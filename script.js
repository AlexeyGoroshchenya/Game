"use strict";

/*
первый вопрос
|                                                          |

checkGame
если введено значение                                   если нажата отмена
|                                                                          |
проверка корректности значения (checkCorrectNumber ()                    функция отмены
|                               |
если корректно                  если не корректно
|                                   |
функция проверки значения           функция переспросить
            \                      /
              \                   /
                \                /
               перезапуск цикла проверки 
             |                              |
        если введено значение           если нажата отмена
            |                                   |
   проверка корректности значения            функция отмены

*/
/*
let target;
let ansver;

let makeTarget = function () {
    return target = (Math.trunc(Math.random() * 100)) + 1;
}

const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}


const checkAnswer = function () {

    if (target == ansver) {
        alert('Поздравляю, Вы угадали!!!')

    } else if (target < ansver) {
        ansver = prompt('Загаданное число меньше');
        checkGame();
    } else if (target > ansver) {
        ansver = prompt('Загаданное число больше');
        checkGame();
    }
}

const checkCorrectNumber = function () {

    let a = !isNumber(ansver); //true
    let b = parseInt(ansver) <= 0;  //true 
    let c = parseInt(ansver) > 100;  //true


    if (a || b || c) {
        ansver = prompt('Введите число от 1 до 100');
        checkGame();
    } else {
        checkAnswer();
    }
    return ansver;
}

const endGame = function () {
    alert("Игра окончена");
    return
}

const checkGame = function () {
    if (ansver === null) {
        endGame();
    } else {
        checkCorrectNumber();
    }
}


const game = function (target) {
    ansver = prompt("Угадай число от 1 до 100");

    checkGame();

}

target = makeTarget();
console.log(target);
game(target);
*/

//_________________________________


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

