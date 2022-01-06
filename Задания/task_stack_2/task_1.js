function func_concat(a, b, c) {
    // Функция для конкатенации 3-х переданных аргументов a, b, c
    a = String(a);
    b = String(b);
    c = String(c);
    console.log(a + b + c);
}

let num_1 = 5;
let num_2 = 7;
let num_3 = 8;

func_concat(num_1, num_2, num_3);
