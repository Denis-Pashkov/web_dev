let length_array = Number(prompt('Сколько элементов в вашем массиве?'));
let arr = [];

for (let i = 0; i < length_array; i++) {
    arr[i] = prompt(`Введите число ${i + 1}:`);
}

console.log('Ваш массив: ', arr);

let arr_sort = []
let priznak = '';

function check_sorted(arr, arr_sort) {
    for (let i = 0; i < arr_sort.length; i++) {
        if (i != arr_sort.length - 1) {
            if (arr_sort[i] <= arr_sort[i + 1]) {
                continue;
            } else {
                return ('not_sorted');
            }
        } else {
            return ('sorted');
        }

    }
}

function find_least(arr, arr_sort) {
    let least;
    let index_least;
    least = arr[0];
    index_least = 0;
    for (let i = 1; i < arr.length; i++) {
        if (least > arr[i]) {
            least = arr[i];
            index_least = i;
        }
    }
    arr_sort.push(least);
    arr.splice(index_least, 1);
    return [arr, arr_sort];
}

while (priznak != 'sorted') {
    for (let i = 0; i < arr.length; i++) {
        return_array = find_least(arr, arr_sort);
        arr = return_array[0];
        arr_sort = return_array[1];
    }
    if (length_array == arr_sort.length){
        priznak = check_sorted(arr, arr_sort);
    }
}

console.log('Сортировка массива: ', arr_sort);
