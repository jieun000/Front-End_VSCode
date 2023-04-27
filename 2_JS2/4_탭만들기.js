// JS 버전
// document.querySelectorAll('.tab-btn')[0].addEventListener('click', function() {
//     document.querySelectorAll('.tab-btn')[0].classList.add('select');
//     document.querySelectorAll('.tab-content')[0].classList.add('show');
// });

// jQuery 버전
// $('.tab-btn').eq(0).on('click', function() {
//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(0).addClass('select');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });
//위에거 세 개
// $('.tab-btn').eq(0).on('click', function() {
//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(0).addClass('select');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(0).addClass('show');
// });
// $('.tab-btn').eq(1).on('click', function() {
//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(1).addClass('select');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(1).addClass('show');
// });
// $('.tab-btn').eq(2).on('click', function() {
//     $('.tab-btn').removeClass('select');
//     $('.tab-btn').eq(2).addClass('select');
//     $('.tab-content').removeClass('show');
//     $('.tab-content').eq(2).addClass('show');
// });



// for(let i=0; i<3; i++) {
//     $('.tab-btn').eq(i).on('click', function() {
//         $('.tab-btn').removeClass('select');
//         $('.tab-btn').eq(i).addClass('select');
//         $('.tab-content').removeClass('show');
//         $('.tab-content').eq(i).addClass('show');
//     });
// }

// 변수 이용_ js 버전
// let btn = $('.tab-btn');
// let content = $('.tab-content');
// // for(let i=0; i<3; i++) {
// for(let i=0; i<btn.length; i++) {
//     btn.eq(i).on('click', function() {
//         btn.removeClass('select');
//         btn.eq(i).addClass('select');
//         content.removeClass('show');
//         content.eq(i).addClass('show');
//     });
// }


// 변수 이용_ jQuery 버전
// let btn = $('.tab-btn');
// let content = $('.tab-content');

// $('.list').on('click', function(e) {
//     // console.log(e.target)   
//     if(e.target === document.querySelectorAll('.tab-btn')[0]) {
//         showTab(0);
//     } else if(e.target === document.querySelectorAll('.tab-btn')[1]) {
//         showTab(1);
//     } else if(e.target === document.querySelectorAll('.tab-btn')[2]) {
//         showTab(2);
//     }
// });
// function showTab(i) {
//     btn.removeClass('select');
//     btn.eq(i).addClass('select');
//     content.removeClass('show');
//     content.eq(i).addClass('show');
// }



//dataset
// HTML내부에 속성을 추가 (개발자만 사용하는 사용자 정의 속성)
// < 태그 data-이름 = "값" >
let btn = $('.tab-btn');
let content = $('.tab-content'); 

$('.list').on('click', function(e) {
// 클릭한 버튼의 데이터셋(index)을 찾아줌 ->index의 값을 알려줌
// console.log(typeof e.target.dataset.index); 데이터셋은 문자임(String)
    // console.log(e.target.dataset.index);
    showTab(e.target.dataset.index);
});
function showTab(i) {
    btn.removeClass('select');
    btn.eq(i).addClass('select');
    content.removeClass('show');
    content.eq(i).addClass('show');
}