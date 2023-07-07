// 1. 한방에
// setTimeout(function() {
//     document.querySelector('.alert').style.display = 'none';
// }, 5000);



//2. 함수화 하여 사용
setTimeout(none, 5000);
function none() {
    document.querySelector('.alert').style.display = 'none';
}

let t = 5;
// setInterval(function() {
//     t--;
//     document.querySelector('.time').innerHTML = t;
// }, 1000);

// 람다식
setInterval(() => {
    t--;
    document.querySelector('.time').innerHTML = t;
}, 1000);