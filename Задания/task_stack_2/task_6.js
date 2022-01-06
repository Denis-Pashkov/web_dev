let length_array = Number(prompt('Сколько элементов в вашем массиве?'));
let arr = [];

for (let i = 0; i < length_array; i++) {
    arr[i] = prompt(`Введите число ${i + 1}:`);
}
console.log('Ваш массив: ', arr);

function quick_sort(arr) {
    let arr_slice_1 = arr.slice(1);
    let pivot = arr[0];
    let less = [];
    let greater = [];
    if (arr.length < 2) {
        return (arr);
    } else {
        for (let i = 0; i < arr_slice_1.length; i++) {
            if (Number(arr_slice_1[i]) > Number(pivot)) {
                greater.push(arr_slice_1[i]);
            } else {
                less.push(arr_slice_1[i]);
            }
        }
    }
    return (quick_sort(less).concat([pivot].concat(quick_sort(greater))));
}

console.log('Результат сортировки:', quick_sort(arr));
