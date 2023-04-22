// Object 객체  - map( key:value )
// let user = {
//     name: 'kim',    //name이 key, kim이 value   //프로퍼티(property)
//     age: 20,    //,안찍어도무방
//     'ip add': 'aaaa'
// };
// console.log(user.name);
// console.log(user['ip add']);
// user.name = 'park';
// console.log(user['name']);

// let key = prompt('뭐보고 싶음?');    //???
// console.log(user[key]);    //???
// console.log(user['key']); //user중key가 진짜 있는지 찾기때문에 안 됨



// let fruit = prompt('과일입력');
// let cart = {
//     [fruit]: 20,
//     price: 3000
// };
// alert(cart.apple);
// =
// function user(name, age) {
//     return {
//         name: name,
//         age: age,
//     };
// }
//위를 좀 더 간단히 (매개변수명이 같으면 생략가능, 
// 공통으로 넣을 요소는 저렇게 가능)
// function user(name, age) {
//     return {
//         name,
//         age,
//         grade: 1
//     };
// }
// let person = user('kim', 30);
// console.log(person.name);
//밑에가 귀찮아서 위!
// let p1 = {
//     name: 'kim',
//     age: 30
// };
// let p2 = {
//     name: 'park',
//     age: 40
// };
//위에 방식에 프린트 이렇게가 간편함
// let p1 = user('kim', 30);
// let p2 = user('park', 20);
// consolelog(p1.name);
// console.log(p1['age']);
// console.log(p2.name);



// let user = {
//     name: 'kim',
//     age: 30,
// };
// user.score = 70;
// alert(user.score);

// user['age']=20; // user.age = 20
// console.log(user.age);

// delete user['name']; 이거하면 밑에 false
// console.log('name' in user);    true
// console.log('asd' in user);     false

// for(let 변수선언 in 반복시킬오브젝트)
// for(let key in user) {
//     console.log(key);
//     console.log(user[key]); //value 뽑기
// }   

// let user = {
//     '44': 'kim',
//     '33': 30,
//      '1': 2,
//   '100' : 3,
// };
// for(let key in user) {
//     console.log(key);   //자동배열
// }   