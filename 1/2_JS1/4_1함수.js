// function 함수이름() {
//     함수실행 코드
// }

// function showMessage() {
//     // alert('ㅎㅇ');
//     let m = 'ㅎㅇ'; //지역 변수
//     alert(m);
// }
// showMessage();
// alert (m); ??


// let a = 'hello';    //전역 변수
// function showMessage() {
//     // alert('ㅎㅇ');
//     let m = 'ㅎㅇ'; //지역 변수
//     alert(m+a);
// }
// showMessage();


// let name = 'bam';    //전역 변수
// function showMessage() {
//     // alert('ㅎㅇ');
//     let name = 'kim'; //지역 변수
//     alert(name);    //kim만 뜸
// }
// showMessage();
// alert(name);    //bam도 뜸


// let name = 'bam';    //전역 변수
// function showMessage() {
//     name = 'kim'; //지역 변수
//     alert(name);    //kim만 뜸
// }
// showMessage();
// alert(name);    // 두번째 kim뜸


// function showMessage(start, end) {
//     alert(start +" "+ end);
// }
// showMessage('hi', 'hello');     //hi hello


// function sum(num1, num2) {
//     return num1 + num2;
// }
// let a = sum(10,20);
// alert (a);


//check함수를 선언
// function check(a) { //a든 age든 여기는 저장공간 //매개변수(파라미터)
//     if(a>=20) {
//         return true;
//     } else {
//         return false;
//     }
// }
// let age = prompt('나이입력');
// //함수 호출 chenk()
// if(check(age)) {    //입력한 age를 공간a로 보내 리턴가져옴  //인수(아규먼트)
//     alert('성인');
// } else {
//     alert('미성년자');
// }