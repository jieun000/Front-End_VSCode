let box = document.querySelector('.box');

// console.log(box.scrollHeight);  //총 높이: 448
// console.log(box.clientHeight);  //box창의 높이: 189
let boxHeight = box.scrollHeight - box.clientHeight;
let isDisable = true;
box.addEventListener('scroll', function() {
    // console.log(box.scrollTop);  //이동거리: 259
    // if(box.scrollTop >= boxHeight -5) {  //브라우저 차이 대비5
    if( isDisable && (box.scrollTop >= boxHeight -5 ) ) {
    alert('다읽음');
    document.querySelector('#chk').disabled = false;
    isDisable = false;  //여러 번 뜨기 대비
    }
});