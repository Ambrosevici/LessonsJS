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






//======================================= 1

const b1 = document.querySelector('.b-1');
const out1 = document.querySelector('.out-1');

b1.onclick = () => {
    out1.style.width = '200px';
    out1.style.height = '90px';
}

//======================================= 2

const b2 = document.querySelector('.b-2');
const out2 = document.querySelector('.out-2');

function f2() {
    out2.classList.add('bg-orange')
}

b2.onclick = f2;

//======================================= 3

const b3 = document.querySelector('.b-3');
const out3 = document.querySelector('.out-3');

function f3() {
    out3.classList.remove('bg-orange')
}

b3.onclick = f3;
//======================================= 4

const b4 = document.querySelector('.b-4');
const out4 = document.querySelector('.out-4');

function f4() {
    out4.classList.toggle('bg-orange')
}

b4.onclick = f4;

//======================================= 5

const b5 = document.querySelector('.b-5');
const out5 = document.querySelector('.out-5');

function f5() {
    if (out4.classList.contains('bg-orange')) {
        out5.innerHTML = 'true'
    } else {
        out5.innerHTML = 'false'
    }
}
b5.onclick = f5;

//======================================= 6

const b6 = document.querySelector('.b-6');
const out6 = document.querySelector('.out-6');

function f6() {
    out6.innerHTML = document.querySelectorAll('.p-6').length
}
b6.onclick = f6;

//======================================= 7

const b7 = document.querySelector('.b-7');
const out7 = document.querySelectorAll('.out-7');

function f7() {
    out7.forEach(item => {
        item.classList.add('bg-orange');
    })
}
b7.onclick = f7;

//======================================= 8

const b8 = document.querySelector('.b-8');
const out8 = document.querySelectorAll('.out-8');

function f8() {
    out8.forEach(item => {
        item.classList.toggle('bg-orange');
    })
}
b8.onclick = f8;

//======================================= 9

const out9 = document.querySelectorAll('.out-9');

out9.forEach(item => {
    item.onclick = function t9() {
        this.classList.add('bg-orange')
    }
})

//======================================= 10

const out10 = document.querySelectorAll('.out-10');

out10.forEach(item => {
    item.onclick = function t10() {
        this.classList.toggle('bg-orange')
    }
})

//======================================= 11

const b11 = document.querySelector('.b-11');
const out11 = document.querySelector('.out-11');

function f11() {
    let x = document.createElement('div');
    x.innerHTML = '25';
    out11.appendChild(x);
}
b11.onclick = f11;

//======================================= 12

const b12 = document.querySelector('.b-12');
const out12 = document.querySelector('.out-12');

function f12() {
    let x = document.createElement('div');
    x.innerHTML = '12';
    x.classList.add('bg-12')
    out12.appendChild(x);
}
b12.onclick = f12;

//======================================= 13

const b13 = document.querySelector('.b-13');
const out13 = document.querySelector('.out-13');

function f13() {
    let x = document.createElement('div');
    x.innerHTML = 'pushMe';
    x.classList.add('bg-orange')
    out13.appendChild(x);

    document.querySelectorAll('.bg-orange').forEach(item => {
        item.onclick = function f13_1() {
            this.style.background = 'green'
        }
    })
}
b13.onclick = f13;

//======================================= 14

const b14 = document.querySelector('.b-14');
const out14 = document.querySelector('.out-14');

function f14() {
    let x = document.createElement('div');
    x.innerHTML = '14';
    x.classList.add('bg-orange');
    out14.appendChild(x);

}
b14.onclick = f14;

//======================================= 15

const b15 = document.querySelector('.b-15');
const out15 = document.querySelector('.out-15');

function f15() {
    let x = document.createElement('div');
    x.innerHTML = '15';
    x.classList.add('bg-orange');
    let parentDiv = out15.parentNode
    parentDiv.insertBefore(x, out15)

}
b15.onclick = f15;

//======================================= 16

const b16 = document.querySelector('.b-16');
const out16 = document.querySelector('.out-16');

function f16() {
    let x = document.createElement('div');
    x.innerHTML = '16';
    x.classList.add('bg-orange');
    let parentDiv = out16.parentNode
    parentDiv.insertBefore(x, out16.nextSibling)

}
b16.onclick = f16;

//======================================= 17

const b17 = document.querySelector('.b-17');
const out17 = document.querySelector('.out-17');

function f17() {
    let x = document.createElement('div');
    x.innerHTML = '17';
    x.classList.add('bg-orange');
    let parentDiv = out16.parentNode
    parentDiv.replaceChild(x, out17)

}
b17.onclick = f17;

//======================================= 18

const b18 = document.querySelector('.b-18');
const out18 = document.querySelector('.out-18');

function f18() {
    out18.innerHTML = document.querySelector('.p-18').getAttribute('data')
}
b18.onclick = f18;
//======================================= 19

const b19 = document.querySelector('.b-19');
const out19 = document.querySelector('.out-19');

function f19() {
    out19.innerHTML = document.querySelectorAll('.p-19')[0].getAttribute('data') + ' ' + document.querySelectorAll('.p-19')[1].getAttribute('data') + ' ' + document.querySelectorAll('.p-19')[2].getAttribute('data');
}
b19.onclick = f19;

//======================================= 20

const b20 = document.querySelector('.b-20');
const out20 = document.querySelector('.out-20');

function f20() {
    out20.setAttribute('title', 'go')
}

b20.onclick = f20;