// function msg() {
//     alert('hi');
// }
// btn.onclick = function() {
//     alert('hello');
// }
// btn.onclick = msg; //()아님

// document.querySelector('#btn').setAttribute('onclick', func());

// btn.addEventListener('click', msg)
// btn.addEventListener('click', () => alert('뭐 또 추가함'));
// btn.removeEventListener('click', msg)
// btn.removeEventListener('click', () => alert('뭐 또 추가함'));  //안됨



// function msg() {
//     alert('hi');
// }
// btn.onclick = function(event) {
//     //함수 만들어서 클릭하면 실행코드
// };
// btn.onclick = function(e) {
//     console.log(e.type);
//     console.log(e.currentTarget);
//     console.log(e.clientX);
//     console.log(e.clientY);
// };



// document.querySelector('#btn').onclick = function() {
//     document.querySelector('#text').getElementsByClassName.display = 'none';
// }
// // //js
// // document.querySelector('#btn').addEventListener('click', function() {
// //     // document.querySelector('#text').style.display = 'none';
// //     this.style.display = 'none';
// // });
// //jQuery 
// $('#btn').on('click', function() {
//     $('#text').css('display', 'none');
// });