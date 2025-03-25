/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/
let array1 = [1, 2, 3, 2, 1, 4]
let arrUniq = [];
function findUniqueElements(array, uniq) {
    
    for(let i = 0; i < array.length; i++) {
        let isUniq = true;
        for (let j = 0; j < uniq.length; j++) {
    if (array[i] === uniq[j]) {
        isUniq = false;
        break
    }
}
    if (isUniq) {
        uniq.push(array[i]);
    }

    }
    return uniq;
}

let x = findUniqueElements(array1, arrUniq);

console.log(x);
