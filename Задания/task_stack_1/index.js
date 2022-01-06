// Task 1

// 1 Вариант решения| Start

let a, b;

a = Number(a);
b = Number(b);

console.log(a, typeof(a), b, typeof(b));

a = String(a);
b = String(b);

console.log(a, typeof(a), b, typeof(b));

// 1 Вариант решения| End


// 2 Вариант решения| Start

function print_in_doc_and_log(a, b) {
    document.write('a = ', a + '<br>', 'type(a) = ', typeof (a) + '<br>', 'b = ', b + '<br>', 'type(b) = ', typeof (b) + ';' + '<br>');
    console.log('a = ', a, 'type(a) = ', typeof (a), 'b = ', b, 'type(b) = ', typeof (b) + ';');
}

let a, b;

a = Number(a);
b = Number(b);

print_in_doc_and_log(a, b);

a = String(a);
b = String(b);

print_in_doc_and_log(a, b);

// 2 Вариант решения| End


// 3 Вариант решения| Start

let a = b = 1;

console.log(a, typeof(a), b, typeof(b));

a = b = String(a);

console.log(a, typeof(a), b, typeof(b));

// 3 Вариант решения| End


// Task 2

let a = 5;
let b = prompt('Введите число b = ');

b = Number(b);

document.write('sum++ = ', a + b + 1 + '<br>', 'subt-- = ', a - b - 1 + '<br>', 'mult++ = ', (a * b) + 1 + '<br>', 'div-- = ', (a / b) - 1);
console.log('sum++ = ', a + b + 1, 'subt-- = ', a - b - 1, 'mult++ = ', (a * b) + 1, 'div-- = ', (a / b) - 1);


// Task 3

let str = 'Hello world';

console.log(str[2]);


// Task 4

let arr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
console.log(arr[0], arr[2], arr[4], arr[1]);


// Task 5

let a = prompt('Введите первое число = ');
let b = prompt('Введите второе число = ');

a = Number(a);
b = Number(b);

if (a > b) {
    b += 100;
}else if (a < b){
    a += 100;
} else{
    a = b += 100;
}

document.writeln('a = ', a, 'b = ', b);
console.log('a = ', a, 'b = ', b);


// Task 6

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

document.write('sum = ', arr[0] + arr[3] + '<br>','subt = ', arr[6] - arr[2] + '<br>', 'mult = ', arr[7] * arr[1] + '<br>', 'div = ', arr[7] / arr[3]);
console.log('sum = ', arr[0] + arr[3],'subt = ', arr[6] - arr[2], 'mult = ', arr[7] * arr[1], 'div = ', arr[7] / arr[3]);
