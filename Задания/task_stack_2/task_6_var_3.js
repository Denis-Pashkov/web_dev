let length_array = Number(prompt('Сколько элементов в вашем массиве?'));
let arr = [];

for (let i = 0; i < length_array; i++) {
    arr[i] = prompt(`Введите число ${i + 1}:`);
}

console.log('Ваш массив: ', arr);

let arr_sort = []

function find_least(arr, arr_sort) {
    let least;
    let index_least;
    least = Number(arr[0]);
    index_least = 0;
    for (let i = 1; i < arr.length; i++) {
        if (least > Number(arr[i])) {
            least = Number(arr[i]);
            index_least = i;
        }
    }
    arr_sort.push(least);
    arr.splice(index_least, 1);
    return [arr, arr_sort];
}

while (arr.length != 0) {
    return_array = find_least(arr, arr_sort);
    arr = return_array[0];
    arr_sort = return_array[1];
}

console.log('Сортировка массива: ', arr_sort);
