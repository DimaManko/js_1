/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  let result = ''; // строка, в которую будет записан результат.
  let capitalizeNext = true; // флаг, который указывает, что следующий непробельный символ должен быть заглавным.

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    // Если текущий символ — пробел (' '), добавляем его в result и устанавливаем capitalizeNext = true.
    if (char === ' ') {
      capitalizeNext = true; 
      result += ' ';
    } 
    // Если capitalizeNext === true, добавляем его в верхнем регистре (toUpperCase()) и сбрасываем флаг.
      else { 
      if (capitalizeNext) {
        result += char.toUpperCase();
        capitalizeNext = false;
      } // Иначе добавляем символ в нижнем регистре (toLowerCase()).
       else {
        result += char.toLowerCase();
      }
    }
  }

  return result;
}

console.log(capitalizeWords("hello world from javascript"));
