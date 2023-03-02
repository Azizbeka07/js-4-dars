// // 1. Function Declaration == Funksiya e'lon qilish
// // function foo(t) {
// //     return t;
// // }

// // foo(1111)

// // //2. Function exprission

// // const abs = function (uuu) {
// //     console.log(uuu);
// // };
// // abs(555)

// // //3. Arrow Function

// // const aaa = (a) => console.log(a);

// // aaa("arrow");

// let time = prompt(`time`)
// let fname = prompt(`fname`)

// const text = function (tttt) {
//     if (tttt > 8 && tttt <= 12) {
//         alert(`Good morning`)
//     } else if (tttt > 13 && tttt <= 20) {
//         alert(`Good afternoon`)
//     } else {
//         alert(`Good night`)
//     }
// }

// alert(text(time))

// const greeting = (f, t) => t > 8 && t < 18 ? alert(`Good afternoon, ${f}`) : alert(`Good night, ${f}`);

// greeting(fname, time);


let text = prompt("5+5=")
let tttt = prompt(`5 / 5=`)

function foo(text) {
    if (text == 10) {
        alert(`Siz togri javob berdingiz`)
    } else if (text == 0) {
        alert(`Siz notogri javob berdingiz`)
    } else if (tttt == 1) {
        alert(`siz togri javob berdingiz`)
    } else {
        alert(`siz notogri javob berdingiz`)
    }
}
alert(foo(tttt))
alert(foo(text))