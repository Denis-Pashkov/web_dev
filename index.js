function fun_onload() {
    display = document.getElementById('display');
    display.value = '0';
};

function update_display(a) {
    display = document.getElementById('display');
    if ((display.value == '0') || (display.value == '')){
        display.value = a;  
    }
    else{
        display.value = display.value + a;
    };
};

function clear_display() {
    display = document.getElementById('display');
    display.value = '';
};

function for_one(a) {
    display = document.getElementById('display');
    display.value = 1 / (Number(display.value));
};

function degree(a) {
    display = document.getElementById('display');
    display.value = (Number(display.value)) ** 2;
};

function sqrt(a) {
    display = document.getElementById('display');
    display.value = (Number(display.value)) ** (1/2);
};

function invert(a) {
    display = document.getElementById('display');
    display.value = (Number(display.value)) * (-1);
};

function dot() {
    display = document.getElementById('display');
    for (let i = 0; i < display.value.length; i++) {
        console.log(display.value);
        if (display.value[i] == '.') {
            break;
        }
        else if ((display.value[i] != '.') && (i == (display.value.length - 1)) && (display.value != '')){
            display.value = display.value + '.'; 
        };
    };
};

function fun_check_zero(a) {
    if (a.value == '0'){
        clear_display();
    };
};

function fun_check_empty(a){
    if (a.value == ''){
        a.value = '0';
    };
};

function fun_del_symbol() {
    display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
};

function reg_and_print(a) {
    update_display(a.innerHTML);
};

function click_operations(a) {
    a = ' ' + a.innerHTML + ' ';
    update_display(a);
};

function answer() {
    display = document.getElementById('display');
    a = display.value.split(' ');
    if (a[1] == '+'){
            display.value = Number(a[0]) + Number(a[2]);
        }else if (a[1] == '-'){
            display.value = Number(a[0]) - Number(a[2]);
        }else if (a[1] == '*'){
            display.value = Number(a[0]) * Number(a[2]);
        }else if (a[1] == '/'){
            display.value = Number(a[0]) / Number(a[2]);
        }else if (a[1] == '%'){
            display.value = (Number(a[0]) * 100) / (Number(a[2])) + '%';
    };
};