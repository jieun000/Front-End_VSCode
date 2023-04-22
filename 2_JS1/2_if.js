/*  prompt로 나이를 입력받음
    입력받은 나이가 20이상인 성인 아니면 청소년
    성인/청소년은 alert출력 */
// let age = prompt('나이입력하셈');
// if(age>=20) {
//     alert('성인');
// } else {
//     alert('청소년');
// }

/*  입력하지 않고 확인, 취소를 누르면
    취소했음 alert    청소년이 안 떠!*/
// let age = Number(prompt('나이입력하셈'));
// if(age>=20) {
//     alert('성인');
// } else if(age<20) {
//     alert('취소');
// } else {
//     alert('청소년');
// }
// console.log(age);

/* 취소 누르면 null나옴
   입력안하면 빈칸 나옴 */
// let age = Number(prompt('나이입력하셈'));
// if(age>=20) {
//     alert('성인');
// } else if(age === null || age == '') {
//     alert('취소');
// } else if(age != Number) {
//     alert('잘못 입력함');
// } else {
//     alert('청소년');
// }

//삼항 연산자 이용법
// let age = (prompt('나이입력하셈'));
// let result = age>=20 ? '성인' : '청소년';
// alert(result);

//switch문
// let a = 2;   // 이건 케이스에 ''떼야함
// let a = prompt('숫자입력'); 
// switch(a) {
//     case '1':
//         alert('a는 1입니다');
//         break;
//     case '2':
//         alert('a는 2입니다');
//         break;
//     case '3':
//         alert('a는 3입니다');
//         break;
//     default:
//         alert('a는 1~3이 아닙니다');
//         break;
// }
//OR
// let a = Number(prompt('숫자입력')); 
// switch(a) {
    // case 1:
    //     alert('a는 1입니다');
    //     break;
    // case 2:
    //     alert('a는 2입니다');
    //     break;
    // case 3:
    //     alert('a는 3입니다');
    //     break;
//     default:
//         alert('a는 1~3이 아닙니다');
//         break;
// }

/* prompt로 숫자를 입력받음 (1~4)
   1,2를 입력하면, 1과2중 하나를 입력했음 <-alert창
   3,4를 입력하면, 3과4중 하나를 입력했음 <-alert창  */
// let a = prompt('숫자입력'); 
// switch(a) {
//     case '1':
//     case '2':
//         alert('1과 2중 하나를 입력했음');
//         break;
//     case '3':
//     case '4':
//         alert('3과 4중 하나를 입력했음');
//         break;
// }


/*  prompt로 숫자를 입력받음
    홀수 입력하면 홀수
    짝수 입력하면 짝수  */
// let a = prompt('숫자입력'); 
// console.log(a%2);
// console.log(typeof(a%2));
// switch(a%2) {
//     case 1:
//         alert('홀수');
//         break;
//     case 0:
//         alert('짝수');
//         break;
//     default: 
//         alert('뭔가 문제가 생김')
// }


/*  간단한 로그인 창 만들기
    prompt로 사용자가 Admin을 입력하면
    비밀번호를 물어보는 prompt창이 나타남

    사용자가 Admin이 아니면 '누군지 모르겠음' alert
    입력하지 않거나 취소를 누르면 '취소함'이라는 alert생성

    비밀번호:1234
    올바른 비밀번호를 입력하면 '관리자님 어서오셈' alert
    비밀번호 틀리면 '비번 틀림' alert
    입력하지 않거나 취소를 누르면 '취소함'이라는 alert 생성 */

// let id = prompt('사용자 입력');

// if(id === 'Admin'){
//     let pw = prompt('비밀번호 입력')
//     if(pw === '1234'){
//         alert('관리자ㅎㅇ')
//     } else if(pw === '' || pw === null){
//         alert('취소');
//     } else {
//         alert('비번 틀림');
//      }   
// } else if (id === '' || id === null) {
//     alert('취소');
// } else {
//     alert('누군지 모름');
// }