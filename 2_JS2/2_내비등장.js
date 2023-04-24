// JS버전
// document.querySelector('.navbar-toggler').addEventListener('click', function(){ 
//     // document.querySelector('.list-group').className = 'show';    //후가 다 지워짐
//     // document.querySelector('.list-group').classList.add('show');
//     document.querySelector('.list-group').classList.toggle('show');
// });

// jQuery버전
$('.navbar-toggler').on('click', function(){ 
    // $('.list-group').addClass   //추가 = .classList.add()
    // $('.list-group').removeClass    //삭제 = .classList.remove()
    $('.list-group').toggleClass('show');   //토글
})