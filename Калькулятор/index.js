function fun_onload() {
    display = document.getElementById('display');
    display.value = '0';
};

function update_display(a) {
    display = document.getElementById('display');
    if ((display.value == '0') || (display.value == '')) {
        display.value = a;
    } else {
        display.value = display.value + a;
    }
};

function clear_display() {
    display = document.getElementById('display');
    display.value = '';
};

function check_for_unary() {
    display = document.getElementById('display');
    if ((display.value.split(' ').length == 1) && (display.value != '')) {
        return (true);
    } else {
        return (false);
    }
};

function for_one(a) {
    display = document.getElementById('display');
    if (check_for_unary()) {
        display.value = 1 / (Number(display.value));
    }
};

function degree(a) {
    display = document.getElementById('display');
    if (check_for_unary()) {
        display.value = (Number(display.value)) ** 2;
    }
};

function sqrt(a) {
    display = document.getElementById('display');
    if (check_for_unary()) {
        display.value = (Number(display.value)) ** (1 / 2);
    }
};

function invert(a) {
    display = document.getElementById('display');
    if (check_for_unary()) {
        display.value = (Number(display.value)) * (-1);
    }
};

function print_simbol(simbol) {
    let display = document.getElementById('display');
    if ((display.value == '0') && (simbol != '0')) {
        clear_display();
    } else if ((display.value == '0') && (simbol == '0')) {
        display.value = '0';
    }
    display.value = display.value + simbol;
}

function check_all_simbol_exist(arr, simbol) {
    try {
        if (String(arr[0]).indexOf(simbol) > -1) {
            return (0);
        } else if (String(arr[1]).indexOf(simbol) > -1) {
            return (1);
        } else if (Sring(arr[2]).indexOf(simbol) > -1) {
            return (2);
        } else {
            return ('Not found');
        }
    } catch (error) {
        return ('Not found')
    }
}

function check_first_simbol_exist(arr, simbol) {
    try {
        if (String(arr[0]).indexOf(simbol) > -1) {
            return (0);
        } else {
            return ('Not found');
        }
    } catch (error) {
        return ('Not found')
    }
}

// function check_middle_simbol_exist(arr, simbol) {
//     try {
//         if (String(arr[1]).indexOf(simbol) > -1) {
//             return (1);
//         } else {
//             return ('Not found');
//         }
//     } catch (error) {
//         return ('Not found')
//     }
// }

function check_last_simbol_exist(arr, simbol) {
    try {
        if (String(arr[2]).indexOf(simbol) > -1) {
            return (2);
        } else {
            return ('Not found');
        }
    } catch (error) {
        return ('Not found')
    }
}

function check_simbol_exist(simbol, this_type) {
    let display = document.getElementById('display');
    dp = display.value.split(' ');
    let arr_split = display.value.split(' ');
    if (arr_split[2] == '') {
        arr_split = arr_split.slice(0, -1);
    }

    if (display.value.split(' ').length == 1) {
        let arr_split1 = Array(display.value);
        if (this_type == 'un') {
            let a = check_all_simbol_exist(arr_split1, simbol);
            if ((a == 'Not found') && ((display.value == '') || (display.value == '0'))) {
                print_simbol('0' + simbol);
            } else if ((a == 'Not found') && (display.value != '') && (display.value != '0')) {
                print_simbol(simbol);
            }
        } else if (this_type == 'op') {
            console.log('type = ', this_type);
            if ((simbol == '-') && ((display.value == '') || (display.value == '0'))) {
                let a = check_all_simbol_exist(arr_split1, simbol);
                if (a == 'Not found') {
                    print_simbol(simbol);
                }
            } else if ((display.value != '') && (display.value != '0')) {
                return (true);
            }
        }
    } else if (arr_split.length == 2) {
        if (this_type == 'un') {

        } else if (this_type == 'op') {
            return (false);
        }
    } else if (arr_split.length == 3) {
        if (this_type == 'un') {
            let a = check_last_simbol_exist(arr_split, simbol);
            console.log(arr_split);
            if (a == 'Not found') {
                print_simbol(simbol);
            }
        } else if (this_type == 'op') {

        }
    }

    // if ((display.value != '') && (display.value != '0')) {
    //     for (let i = 0; i < display.value.length; i++) {
    //         if ((display.value[i] == simbol)) {
    //             counter++;
    //             if ((counter == 2) && (this_type == 'un') && (display.value.split(' ').length == 3)) {
    //                 break;
    //             } else if ((counter == 1) && (this_type == 'un') && (display.value.split(' ')).length == 1) {
    //                 break;
    //             } else if ((counter >= 1) && (this_type == 'op') && (display.value.split(' ').length >= 2)) {
    //                 break;
    //             }
    //         } else if (((counter == 0) || (counter == 1)) && (i == (display.value.length - 1))) {
    //             if (this_type == 'un') {
    //                 let check_simbol_in_arr = 0;
    //                 for (let i = 0; i < arr.length; i++) {
    //                     if ((display.value.split(' ')[1] == arr[i])) {
    //                         check_simbol_in_arr = 1;
    //                     }
    //                 }
    //                 if ((check_simbol_in_arr == 1) && (display.value.split(' ')[2] != '')) {
    //                     if ((simbol == '.') && (counter == 0)) {
    //                         display.value = display.value + simbol;
    //                     } else if ((simbol == '.') && (counter == 1)) {
    //                         k = 0;
    //                         arr_split = display.value.split(' ');
    //                         console.log('d', arr_split);
    //                         if (String(arr_split[2]).indexOf('.')) {
    //                             k == 1;
    //                         }
    //                         if (k != 1) {
    //                             display.value = display.value + simbol;
    //                         }
    //                     } else {
    //                         display.value = display.value + simbol;
    //                     }
    //                 } else if (check_simbol_in_arr == 0) {
    //                     display.value = display.value + simbol;
    //                 }
    //             } else if (this_type == 'op') {
    //                 let priznak = 0;
    //                 for (let i = 0; i < display.value.length; i++) {
    //                     for (let j = 0; j < arr.length; j++) {
    //                         if (display.value[i] == arr[j]) {
    //                             console.log(arr[j], display.value.split(' ').length)
    //                             if ((arr[j] == '-') && (display.value.split(' ').length == 1)) {
    //                                 continue;
    //                             } else {
    //                                 priznak = 1;
    //                             }
    //                         }
    //                     }
    //                 }
    //                 if (priznak == 1) {
    //                     return (false);
    //                 } else {
    //                     return (true);
    //                 }
    //             }
    //         }
    //     }
    // } else if ((display.value == '0') && (simbol == '.')) {
    //     display.value = display.value + simbol;
    // }
};

function dot(a) {
    display = document.getElementById('display');
    check_simbol_exist('.', 'un')
};

function fun_check_zero(a) {
    if (a.value == '0') {
        clear_display();
    };
};

function fun_check_empty(a) {
    if (a.value == '') {
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
    if (check_simbol_exist(a.innerHTML, 'op')) {
        a = ' ' + a.innerHTML + ' ';
        update_display(a);
    }
};

function answer() {
    display = document.getElementById('display');
    a = display.value.split(' ');
    if (a[1] == '+') {
        display.value = Number(a[0]) + Number(a[2]);
    } else if (a[1] == '-') {
        display.value = Number(a[0]) - Number(a[2]);
    } else if (a[1] == '*') {
        display.value = Number(a[0]) * Number(a[2]);
    } else if (a[1] == '/') {
        display.value = Number(a[0]) / Number(a[2]);
    } else if (a[1] == '%') {
        display.value = (Number(a[0]) * 100) / (Number(a[2]));
    }
};
