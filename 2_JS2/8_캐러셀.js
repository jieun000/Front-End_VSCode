document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".carousel").style.transform = "translateX(0)";
  no = 1;
});
$(".btn2").on("click", function () {
  $(".carousel").css("transform", "translateX(-100vw)");
  no = 2;
});
$(".btn3").on("click", function () {
  $(".carousel").css("transform", "translateX(-200vw)");
  no = 3;
});

// let no = 1;
// $('.next').on('click', function() {
//     //이미지 박스가 몇번인지 알아야함
//     //박스가 1번이면 -100vw이동시켜줌, 박스가 2번이면 -200vw이동
//     if(no === 1) {
//         $('.carousel').css('transform', 'translateX(-100vw)');
//         no++;
//     } else if(no ===2) {
//         $('.carousel').css('transform', 'translateX(-200vw)');
//         no++;
//     }
// });

let no = 1; //html 연관된 건 없음 걍 번호임
const carousel = $(".carousel");
$(".previous").on("click", function () {
  if (no > 1) {
    carousel.css("transform", `translateX(-${no - 2}00vw)`);
    no--;
    // console.log(no); //1이전은 -가 계속되는게 확인되므로 if처리
  }
});
$(".next").on("click", function () {
  if (no < 3) {
    carousel.css("transform", `translateX(-${no}00vw)`);
    no++;
  }
});