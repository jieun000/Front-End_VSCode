// JS
// document.querySelector('.play-btn').addEventListener('click', function() {
//     document.querySelector('.black-bg').classList.add('show');
// });
// document.querySelector('.close-btn').addEventListener('click', function() {
//     document.querySelector('.black-bg').classList.remove('show');
// });

// jQuery
$('.play-btn').on('click', function() {
    $('.black-bg').addClass('show');
    // $('.black-bg').fadeIn(); //천천히 뜨기
});
$('.close-btn').on('click', function() {
    $('.black-bg').removeClass('show');
    // $('.black-bg').fadeOut(3000); // 3초간 천천히 사라지기
    // $('.black-bg').fadeOut('fast'); // 빠르게 사라지기 & slow면 느리기 사라지기
});