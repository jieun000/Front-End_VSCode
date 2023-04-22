// DOM ( document Object medel)
// JS -> html을 접근
// document.body.style.background = 'red';
// setTimeout(() => document.body.style.background = '', 3000);

// for(let i=0; i<document.body.childNodes.length; i++) {
//     console.log(document.body.childNodes[0]);
// }

// let a = document.getElementById('elem');
// //보통은 변수명과 아이디명을 맞춰서씀 "let elem"
// a.style.background = 'red';
// a.style.color = 'white';

// 위와 같음
// let a = document.getElementById('elem').style.background = 'red';


// querySelector은 하나만 찾음
// let a = document.querySelector('ul')
// let a = document.querySelector('.클래스명')
// let a = document.querySelector('#아이디명')
// let a = document.querySelector('ul > li:last')
// let a = document.querySelector('ul > li');
// console.log(a);


// let a = document.querySelectorAll('ul > li');
// for(let i of a) {
//     console.log(i.innerHTML);
// }
// a[1].innerHTML = '다른거';
// document.querySelectorAll('ul')[0].style.background= 'red';
// document.querySelectorAll('.abc')[0].style.background= 'red';



// function show() {
//     document.getElementById('ab').style.display = 'block';
// }
// function hide() {
//     document.getElementById('ab').style.display = 'none';
// }


// function showHide(dp) {
    // document.getElementById('ab').innerHTML = 'ㅎㅇ';
    // document.getElementById('ab').style.display = dp;

    // document.getElementsByClassName('alert-box')[0].style.display = dp;
    
    // document.querySelectorAll('.alert-box')[0].style.display = dp;
// }



//3박스의 내용이 다르게 나오게끔 / .innerHTML  / 함수 하나로 처리
// function showCh(text) {
    // document.getElementById('ab').innerHTML = text;
    // document.getElementById('ab').style.display = 'block';
//두줄위아래같음 이건 JS문법
    // document.querySelectorAll('.alert-box')[0].innerHTML = text;
    // document.querySelectorAll('.alert-box')[0].style.display = 'block';
// jQury문법
// $('선택자')
    // $('.alert-box').html(text); //위의 innerHTML과 같은 html
    // $('.alert-box').css(속성, 값)
    // $('.alert-box').css('display', 'block');
// }



////3박스의 내용이 더해져서 뜨게
// function show1() {
//     document.getElementById('ab1').style.display = 'block';
// }
// function show2() {
//     document.getElementById('ab2').style.display = 'block';
// }
// function show3() {
//     document.getElementById('ab3').style.display = 'block';
// }

// 더 간략 방법
// function show(id) {
    // document.getElementById(id).style.display = 'block';

    //요건 왜 안 될까~? 답: querySelectorAll는 #이 없어서 안 됨!
    // document.querySelectorAll(id)[0].style.display = 'block';
    // document.querySelectorAll('#'+id)[0].style.display = 'block'; //이상적 답
    // document.querySelectorAll(`#${id}`)[0].style.display = 'block'; //이상적 답
    //위에꺼 jQuery버전
    // $(`#${id}`).css('display', 'block');

    // document.querySelectorAll('#ab1')[0].style.display = 'block'; //이건 됨
    // document.querySelectorAll(선택자)[0].style.display = 'block';

    //덤 자바스크립트와 제이쿼리 차이 확인
    // document.querySelectorAll('#ab')
    // $('#ab1')
// }



//버튼 없애기
//함수 3개 만들고
// function hide1() {
//     document.querySelectorAll("ab1")[0].getElementsByClassName.display = 'none';
// }
// function hide2() {
//     document.querySelectorAll("ab1")[0].getElementsByClassName.display = 'none';
// }
// function hide3() {
//     document.querySelectorAll("ab1")[0].getElementsByClassName.display = 'none';
// }
//1개 만들고
// function hide(id) {
    // document.querySelectorAll('#' + id)[0].style.display = 'none';
//     제이쿼리
    // $('#' + id).eq(0).css('display', 'none');
// }
//함수 없이
// function showHide(id, dp) {
    // document.querySelectorAll(`#${id}`)[0].style.display = dp;
//     // 제이쿼리
//     // $(`#${id}`).css('display', dp);
// }


// [ DOM 2 ]

// 힌트
// 버튼을 누르는 횟수마다
// block / none이 다르게 실행되도록 하면 될 듯
// 그러려면 버튼 누르는 횟수를 저장하는 것도 필요함
// 버튼을 누름 -> 누른 횟수가 계속 늘어남
// 1-> 2-> 3-> 4-> 5-> 6......

// let cnt = 0; //버튼을 클릭한 횟수를 저장
// function onOff() {
//     let cnt = 0; //버튼을 클릭한 횟수를 저장
//     cnt++;
//     if(cnt % 2 === 1) {
//         document.querySelectorAll('.box')[0].style.display = 'none';
//     } else {
//         document.querySelectorAll('.box')[0].style.display = 'block'
//     }
//  }


//  let cnt = 0;
//  let sw = 0;
//  function onOff() {
//     cnt++;

//     if(sw === 0) {
//         document.querySelectorAll('.box')[0].style.display = 'none';
//         sw = 1;
//     } else {
//         document.querySelectorAll('.box')[0].style.display = 'block'
//         sw = 0;
//     }

//  }

// let cnt = 0;
// let sw = 0;
// const box = document.querySelectorAll('.box')[0];
// const btn = document.querySelectorAll('.btn')[0];
// btn.innerHTML = '표시';
// box = 1;
// function onOff() {
//     cnt++;
//     if(cnt % 2 === 1) {
//         // jQuery
//         // $('.box').css('display', 'none');
//         // $('.btn').html('표시');
//         // JS
//         box.style.display = 'none';
//         btn.innerHTML = '표시';
//     } else {
//         box.style.display = 'block'
//         btn.innerHTML = '숨김';
//     }
// }

// function sh() {
//     $('.box2').hide();
// }
// function sh() {
//     $('.box2').show();
// }

function sh() {
    $('.box2').toggle();
}