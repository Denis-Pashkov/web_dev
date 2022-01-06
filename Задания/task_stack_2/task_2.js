function func_concat(a, b, c) {
    // Функция для конкатенации 3-х переданных аргументов a, b, c
    a = String(a);
    b = String(b);
    c = String(c);
    return [a + b + c, c + b + a];
}

function console_log(a, b, flag) {
    // Функция для вывода неравенства или равенства и комментария к нему
    if (flag) {
        console.log(`${a} = ${b}`);
        console.log(`Число ${a} равно числу ${b}`);
    } else {
        console.log(`${a} > ${b}`);
        console.log(`Число ${a} больше числа ${b}`);
    }
}

// Объявляем переменные
let num_1 = prompt('Input first number:');
let num_2 = prompt('Input second number:');
let num_3 = prompt('Input last number:');

// Функция возвращает массив в arr_orig_res с элементами [a + b + c, c + b + a]. 0 - прямая конкатенация, 1 - обратная
let arr_orig_res = func_concat(num_1, num_2, num_3);

// Создаем признак для распознавания равенства для выбора сценария функции console_log
let flag = false;

// Сравниваем значения чисел конкатенаций и вызываем функцию вывода console_log
if (Number(arr_orig_res[0]) > Number(arr_orig_res[1])) {
    console_log(Number(arr_orig_res[0]), Number(arr_orig_res[1]), flag);
} else if ((Number(arr_orig_res[0]) < Number(arr_orig_res[1]))) {
    console_log(Number(arr_orig_res[1]), Number(arr_orig_res[0]), flag)
} else {
    flag = true;
    console_log(Number(arr_orig_res[0]), Number(arr_orig_res[1]), flag);
}
