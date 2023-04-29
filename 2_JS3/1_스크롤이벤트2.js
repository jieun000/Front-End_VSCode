//위에 스크롤한만큼 늘어나는 바 만들기

console.log(window.innerHeight);    //보이는 창 크기(새로고침하면서 봐야함)
console.log(document.querySelector('body').clientHeight);   //전체(body,html) 창 높이
let hei = document.querySelector('body').clientHeight - window.innerHeight;

window.addEventListener('scroll', function() {
    // console.log(window.scrollY);    //4638
    // console.log(window.scrollY / hei * 100 );

    let a = window.scrollY / hei * 100;
    document.querySelector('.status-bar').style.width = `${a}%`;
});
