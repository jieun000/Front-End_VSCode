/*  a와 b는 prompt로 입력
    a와 b는 작은걸 리턴시켜주는 min함수를 생성하고
    결과는 alert로 출력                             */
// function min(a,b) {
//     if(a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }
// let a = prompt('a입력');
// let b = prompt('b입력');
// alert(min(a, b));
// alert(min(11, 1));
// alert(min('10', '3')); // 문자라서 올바른 비교X

// let a = Number(prompt('a입력'));
// let b = Number(prompt('b입력'));
// alert(min(a, b));



// 함수 선언문
// function showMsg() {
//     alert('ㅎㅇ');
// }
// showMsg();  // 표현식만 있을 때 이거는 에러
// 함수 표현식
// let showMsg = function() {
//     alert('ㅎㅇ');
// }
// showMsg();


// "use strict"
// let age = prompt('나이 입력');

// if(age>=20) {
//     function showMsg() {
//         alert('안녕하세요');
//     }
// } else {
//     function  showMsg() {
//         alert('ㅎㅇ');
//     }
// }
// showMsg();  //에러

// "use strict"
// let age = prompt('나이 입력');
// // let showMsg; ??

// if(age>=20) {
//     showMsg = function() {
//         alert('안녕하세요');
//     }
// } else {
//     showMsg = function() {
//         alert('ㅎㅇ');
//     }
// }
// showMsg();



// function ask(q, yes, no) {
//     if(confirm(q)) { 
//         yes();
//     } else {
//         no();
//     }
// }
// function showCancel() {
//     alert('취소');
// }
// // let yes = function() {
// //     alert('오케');
// // }
// // 위와 아래가 같은 것
// function showOK() {
//     alert('오케');
// }
// ask('확인?', showOK, showCancel)



// function showMsg() {
//     console.log('ㅎㅇ');
// }
// showMsg();
// setTimeout(showMsg, 3000);  //3000은 3초
// setTimeout(function() {
//     console.log('새로만듬');
// }, 3000);
// setInterval(showMsg, 3000); //3초마다 계속 실행됨
// setInterval(function() {
//     console.log('새로만듬');
// }, 3000);



//화살표 함수
// let sum = (a, b) => a + b;
// let sum = function(a, b) {
//     return a + b;
// }
// alert( sum(2,3) );

// let sum = (a) => a + 5;
// let msg = () => alert('ㅎㅇ')
// msg();
// alert( sum(2,3) );

// let add = (a, b) => {
//     let c = a - b;
//     return c;
// };  //자바 람다식과 같음
// alert(add(10,5));