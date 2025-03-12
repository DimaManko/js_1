/*
* Напишите код, который симулирует бросок двух шестигранных игральных кубиков и определяет, выпал ли выигрышный дубль.
* В переменные dice1 и dice2 должны присваиваться случайные целые числа от 1 до 6.
* Дубль считается выигрышным, если на обоих дайсах выпало одно и то же число, и это число больше 3.
* Полученное булево значение сохраните в переменной isWinningDouble

* Для успешного прохождения тестов не меняйте названия переменных!
*/

let dice1 = Math.ceil(Math.random() * 6); // your code
let dice2 = Math.ceil(Math.random() * 6);// your code
let isWinningDouble = false; // your code



while (!isWinningDouble) {
  console.log('Первый бросок: ' + dice1)
  console.log('Второй бросок: ' + dice2)
if ((dice1 === dice2) && dice1 > 3 && dice2 > 3) {
  console.log('Выигрышный дубль!')
  isWinningDouble = true;
} else {
  console.log('Не выигрышный дубль.')
}
dice1 = Math.ceil(Math.random() * 6);
dice2 = Math.ceil(Math.random() * 6);
}

