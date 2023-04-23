let fruits = [
    {name: 'apple', memo: '빨개요'},
    {name: 'mango', memo: '달달함'},
    {name: 'melon', memo: '맛있음'},
];

// console.log(fruits[1].name);
// for(let i=0; i<3; i++) {
//     console.log(fruits[i].name);
// }
// fruits.forEach((data, i) => {
//     console.log(i + "번" + data.name);
// });
//JS
// document.querySelectorAll('.card-body h5')[0].innerHTML = fruits[0].name;
// document.querySelectorAll('.card-title')[0].innerHTML = fruits[0].name;
// document.querySelectorAll('.card-text')[0].innerHTML = fruits[0].memo;
                                // <img src="img/apple.jpg" class="card-img-top"
// document.querySelectorAll('.card-img-top')[0].setAttribute('src', 'img/apple.jpg');
// document.querySelectorAll('.card-img-top')[0].setAttribute('src', `img/${fruits[0].name}.jpg`);
// document.querySelectorAll('.card-img-top')[0].setAttribute('src', 'img/' + fruits[0].name + '.jpg');

//jQuery
// $('.card-body h5').eq(0).html(fruits[0].name);
// $('.card-text').eq(0).html(fruits[0].memo);
// $('.card-img-top').eq(0).attr('src', `img/${fruits[0].name}.jpg`);

// $('.card-body h5').eq(1).html(fruits[1].name);
// $('.card-text').eq(1).html(fruits[1].memo);
// $('.card-img-top').eq(1).attr('src', `img/${fruits[1].name}.jpg`);

// $('.card-body h5').eq(2).html(fruits[2].name);
// $('.card-text').eq(2).html(fruits[2].memo);
// $('.card-img-top').eq(2).attr('src', `img/${fruits[2].name}.jpg`);

// JS
// for(let i=0; i<fruits.length; i++) {
//     document.querySelectorAll('.card-body h5')[i].innerHTML = fruits[i].name;
//     document.querySelectorAll('.card-text')[i].innerHTML = fruits[i].memo;
//     document.querySelectorAll('.card-img-top')[i].setAttribute('src', `img/${fruits[i].name}.jpg`);
// }


//jQuery 두 가지 쓰기
// fruits.forEach((data, i) => {
//     // $('.card-body h5').eq(i).html(fruits[i].name);
//     // $('.card-text').eq(i).html(fruits[i].memo);
//     // $('.card-img-top').eq(i).attr('src', `img/${fruits[i].name}.jpg`);

//     $('.card-body h5').eq(i).html(data.name);
//     $('.card-text').eq(i).html(data.memo);
//     $('.card-img-top').eq(i).attr('src', `img/${data.name}.jpg`);
// });



// 카드 추가 첫 번째 방법
// let first = document.createElement('div');
// first.className = 'col';    //<div class='col'></div>
// first.innerHTML = ` <div class="card" style="width: 18rem;">
//                     <img src="img" class="card-img-top">
//                     <div class="card-body">
//                     <h5 class="card-title">제목</h5>
//                     <p class="card-text">내용</p>
//                     <button class="btn btn-primary">담기</button>
//                     </div>
//                     </div>`;
// document.querySelector('.row').append(first);

// 카드 추가 두 번째 방법
// let second = ` <div class="card" style="width: 18rem;">
//                 <img src="img" class="card-img-top">
//                 <div class="card-body">
//                 <h5 class="card-title">제목</h5>
//                 <p class="card-text">내용</p>
//                 <button class="btn btn-primary">담기</button>
//                 </div>
//                 </div>`;           
// // js     
// document.querySelector('.row').insertAdjacentHTML("beforeend", second);
// // jQuery
// $('.row').append(second);


// 카드 추가하며 내용 넣기
// for(let i=0; i<fruits.length; i++) {
// let second = ` <div class="card" style="width: 18rem;">
//                 <img src="img/${fruits[i].name}.jpg" class="card-img-top">
//                 <div class="card-body">
//                 <h5 class="card-title">${fruits[i].name}</h5>
//                 <p class="card-text">${fruits[i].memo}</p>
//                 <button class="btn btn-primary">담기</button>
//                 </div>
//                 </div>`;           
// // js     
// document.querySelector('.row').insertAdjacentHTML("beforeend", second);
// // jQuery
// $('.row').append(second);
// }

// 카드 추가하며 내용 넣기 2
// fruits.forEach((data) => {
//     let second = ` <div class="card" style="width: 18rem;">
//     <img src="img/${data.name}.jpg" class="card-img-top">
//     <div class="card-body">
//     <h5 class="card-title">${data.name}</h5>
//     <p class="card-text">${data.memo}</p>
//     <button class="btn btn-primary">담기</button>
//     </div>
//     </div>`;  

//  $('.row').eq(0).append(second);
// });

// 콘솔 창에 행렬로 자료 넣기
let arr = [1,2,3,4,5];
arr.forEach((data) => {
    console.log(data);
});