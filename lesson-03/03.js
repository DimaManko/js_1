// Разработайте функцию findLargest, которая принимает три числа и возвращает наибольшее из них.

function findLargest(numb1, numb2, numb3) {
    if (numb1 > numb2 && numb1 > numb3) {
        return numb1;
    } else if (numb2 > numb1 && numb2 > numb3) {
        return numb2;
    } else {
        return numb3;
    }
}
let x = findLargest(8, 4, 6);
console.log(x);
