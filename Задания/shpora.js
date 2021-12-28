// a = 'Salam alleikum)';
// a = String(a);
// c = a + b;
// a = a**2;
// a = Number(a);
// console.log(typeof(a));
// document.write(a);
// alert(a);

// a = 6;
// b = a;
// c = 3;

// if (a == 6){
//     b++;
//     b -= a;
//     b = c - a;
//     console.log(b)
// }

// let a = 5;
// let b = 6;
// let c = 3;

// if (a == 4) {
//     console.log(c);
// }
// else if (b == 7){
//     console.log(b);
// }
// else if(){

// }
// else{
//     console.log('else');
// }

// let a = 5;
// const z = 1;
// -----------------------------------
// function function_1(z) {
//     return(z)
// }

// let m = prompt('Введи свое имя');

// let a = function_1(m);
// console.log(a)
// ------------------------------------

// function fun1(a) {
//     console.log(a+=1)
// }

// a = 5;

// fun1(a)

// let a = document.createElement('p');
// // a.innerHTML = 'Hello';
// document.getElementById('body').appendChild(a);

function alert_js(a) {
    a.innerHTML = ':)';

    let table = document.getElementById('table1');
    let columns = table.querySelectorAll("tr").length;
    let len_td = table.querySelectorAll("td").length;

}

let table = document.createElement('table');
table.setAttribute("id", "table1");
let tr = document.createElement('tr');
let td = document.createElement('td');
td.setAttribute("onclick", "alert_js(this)");
td.innerHTML = Math.floor(Math.random() * 9);
tr.appendChild(td);
table.appendChild(tr);
document.getElementById('body').appendChild(table);