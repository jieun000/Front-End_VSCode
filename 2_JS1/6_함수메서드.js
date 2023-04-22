//함수 / 메서드
//  let user = {
//     name: 'kim',
//     age: 30,   
//     msg() {
//         console.log('gd');
//     }
//  };
//  user.msg();


// let user = {
//     name: 'kim',
//     age: 30,  
// };
// function msg() {
//     console.log('ㅎㅇ');
// }

// user.mag = msg;
// user.a = msg;

// let user = {
//     name: 'kim',
//     age: 30,  
//     msg() {
//         console.log(this.name);  //아래와 같음
//         console.log(user.name);
//     },
//  };
//  user.msg();

// let aa = user;
// console.log(aa.name); //아래와 같음
// aa.msg(); //user에 들어있는 kim
// let aa = user;
// user = null;    //this.name시만 가능
// aa.msg();



// let a = {
//     name: 'kim',
// };
// let b = {
//     name: 'park',
// };
// function msg() {
//     console.log(this.name);
// }
// a.func = msg;
// b.func = msg;
// a.func();
// b.func();



// 복사
// aaa = bbb
// let a = 'ㅎㅇ';
// let b;
// b = a;
// a = 'ㅎㅇ';


let a = {
    name: 'kim',
    age: 30,
};

// let b = a;  //b밸류를 a처럼 새로 만들면 false뜸. 다르다고.
// a.name = 'park';
// console.log(b.name);
// console.log(a==b);
// console.log(a===b);

// let b = {};
// for(let key in a) {
//     b[key] = a[key];
// }
// a.name = 'park';
// console.log(b);
// console.log(a==b);
// console.log(a===b);

// let b = Object.assign({}, a);   //위for반복문과 같음
// let b = Object.assign({score:30}, a);   //위for반복문과 같음
// a.name = 'park';
// console.log(b);
// console.log(a==b);
// console.log(a===b);