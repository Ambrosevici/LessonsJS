// const one = document.querySelector('.one');
// const toggle = document.querySelector('.toggle');

// one.style.width = '150px';
// one.style.paddingBottom = '40px';

// // console.log(one.style);

// one.classList.add('two', 'three');
// one.classList.remove('three');

// toggle.onclick = function () {
//     this.classList.toggle('three');
// }

// //data-атрибуты
// console.log(one.getAttribute('data'));
// console.log(document.querySelectorAll('link')[1].getAttribute('href'));

// one.setAttribute('data-num', 8);


// const buttons = document.querySelectorAll('.gas');

// buttons.forEach(item => {
//     item.onclick = function () {
//         let gallons = document.querySelector('.gallons').value;
//         let ammount = this.getAttribute('data');
//         // console.log(gallons * ammount);

//         let a = document.createElement('div');
//         a.innerHTML = gallons * ammount;
//         a.classList.add('one');

//         // a.onclick = function () {
//         //     alert('hello')
//         // }

//         document.querySelector('.test').appendChild(a);
//     }
// })


// let a = document.createElement('div');

// a.innerHTML = 'Hello';
// a.classList.add('one')
// a.onclick = function () {
//     alert('hello')
// }

// document.querySelector('.test').appendChild(a);
// console.log(a);

const out = document.querySelector('.out');
const out4 = document.querySelector('.out-4');
const out5 = document.querySelector('.out-5');

const b1 = document.querySelector('.b-1');
const b5 = document.querySelector('.b-5');


//======================================= 1

// b1.onclick = () => {
//     out.style.width = '200px';
//     out.style.height = '90px';
// }

//======================================= 2

// b1.onclick = () => {
//     out.classList.add('bg-orange')
// }

//======================================= 3

// b1.onclick = () => {
//     out.classList.remove('bg-orange')
// }

//======================================= 4

// b1.onclick = () => {
//     out.classList.toggle('bg-orange');
// }

//======================================= 5

// function f5() {
//     if (out4.classList.contains('bg-orange')) {
//         out5.innerHTML = 'true'
//     } else {
//         out5.innerHTML = 'false'
//     }
// }
// b5.onclick = f5;

//======================================= 6

// const b6 = document.querySelector('.b-6');
// const out6 = document.querySelector('.out-6');

// function f6() {

// }
// b6.onclick = f6;

//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================
//=======================================