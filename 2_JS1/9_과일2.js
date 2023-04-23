let fruits = [
    {name: 'apple', memo: '빨개요'},
    {name: 'mango', memo: '달달함'},
    {name: 'melon', memo: '맛있음'},
    {name: 'strawberry', memo: '맛있음'},
    {name: 'watermelon', memo: '맛있음'},
];

fruits.forEach((data) => {
    let second = ` <div class="card" style="width: 18rem;">
                <img src="img/${data.name}.jpg" class="card-img-top">
                <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <p class="card-text">${data.memo}</p>
                <button class="btn btn-primary cart">담기</button>
                </div>
                </div>`;  
 $('.row').eq(0).append(second);
});


// 관리자창(F12) -> Application -> LocalStorage -> 화살표
// localStorage.setItem(Key, Value);
// localStorage.setItem('name', 'hong');
// localStorage.setItem('age', 20);


// localStorage.setItem('name', 'kim');
// localStorage.removeItem('age');

// 콘솔창에 localStorage에 저장된 값 빼와서 띄움
// console.log(localStorage.getItem('name'));

// let arr = [1,2,3,4,5];
// localStorage.setItem('arr', arr); // 1,2,3,4,5

// let arr = [1,2,3,4,5];
// // //Json으로 변환
// let arrjson = JSON.stringify(arr);
// localStorage.setItem('arr', arrjson); // [1,2,3,4,5]로 됨
// let getarr = localStorage.getItem('arr');
// // // 아직 json형태 (문자열)
// console.log(getarr[0]); // [ 나옴
// // // json에서 배열로 변환
// getarr = JSON.parse(getarr);
// console.log(getarr[0]); // 1 나옴



//cart추가후
// document.querySelectorAll('.cart')[0].addEventListener('click', function() {
//     alert('ㅎㅇ');
// })
// $('.cart').on('click', function() {
//     alert('ㅎㅇ');
// })

// $('.cart').on('click', function(e) {
//     //클릭한 담기에 해당되는 과일 이름이 필요함
//     // JS
//     // let name = e.target.previousElementSibling.previousElementSibling.innerHTML;
//     //jQuery
//     let name = $(e.target).siblings('h5').html();
//     // // alert(name);
//     localStorage.setItem('name', JSON.stringify([name]));

//     // let temp = localStorage.getItem('name'); 밑이랑 같은 거
//     // 로컬스토리지에 있는 name을 빼와서 다시 배열형태로 변환
//     let temp = JSON.parse(localStorage.name);
//     //거기에 클릭한 과일 이름을 배열에 추가
//     temp.push(name);
//     // console.log(temp);
//     localStorage.setItem('name', JSON.stringify(temp));
// });

// $('.cart').on('click', function(e) {
//     let name = $(e.target).siblings('h5').html();
    
//     if(localStorage.getItem('name') != null){
//     let temp = JSON.parse(localStorage.name);
//     temp.push(name);
//     localStorage.setItem('name', JSON.stringify(temp));
//     } else {
//         localStorage.setItem('name', JSON.stringify([name]));
//     }
// });


// //장바구니 목록
// $('.cart').on('click', function(e) {
    
//     let name = $(e.target).siblings('h5').html();
    
//     if(localStorage.getItem('name') != null) {
//         let temp = JSON.parse(localStorage.name);
//         //    let temp = localStorage.getItem('name');
//         //    temp.parse(temp);
//         temp.push(name);
//         localStorage.setItem('name', JSON.stringify(temp));
//         // temp=JSON.stringify(temp);
//         // localStorage.setItem('name', temp);
//     } else {
//         localStorage.setItem('name', JSON.stringify([name]));
//     }
// });

// let list = localStorage.getItem('name');
// list = JSON.parse(list);
// console.log(list[0]);

// list.forEach((data)=> {
//     $('.list').append(`<div>${data}</div>`);
// });

// let items = [
//     {name: 'apple', cnt: 3},
//     {name: 'mango', cnt: 1},
//     {name: 'melon', cnt: 1},
// ];


// //장바구니 목록2 // 다시 볼 것
// $('.cart').on('click', function(e) {
    
//     let name = $(e.target).siblings('h5').html();

//     if(localStorage.getItem('items') != null) {

//         let isHave; //과일이 로컬스토리지에 있나 없나를 알려주는 변수
//         let index;  //과일이 로컬스토리지에 있으면 해당 위치를 저장 변수

//         let temp = localStorage.getItem('items');
//         temp= JSON.parse(temp);  //temp.parse가 아님

//         //로컬스토리지(temp)에 담기를 누른 과일(name)이 있나 없나를 찾아주는 반복문
//         temp.forEach((data, i) => {
//             if(data.name === name) {    //있냐없냐 물어봄
//                 isHave = true;
//                 index = i;  //해당 과일이 있는 배열방 위치를 기억
//             }
//         });

//         if(isHave) {
//             temp[index].cnt++;
//         } else {
//             temp.push({'name':name, 'cnt':1});
//         }

//         temp=JSON.stringify(temp);
//         localStorage.setItem('items', temp);

//     } else {
//         localStorage.setItem('items', JSON.stringify([{'name':name, 'cnt':1}]));
//     }
// });

// let list = localStorage.getItem('items');
// list = JSON.parse(list);

// list.forEach((data)=> {
//     $('.list').append(`<div>${data}</div>`);
// });



//장바구니 목록3
$('.cart').on('click', function(e) {
    
    let name = $(e.target).siblings('h5').html();
    
    if(localStorage.getItem('items') != null) {

        let isHave; //과일이 로컬스토리지에 있나 없나를 알려주는 변수
        let index;  //과일이 로컬스토리지에 있으면 해당 위치를 저장 변수

        let temp = localStorage.getItem('items');
        temp= JSON.parse(temp);  //temp.parse가 아님

        //로컬스토리지(temp)에 담기를 누른 과일(name)이 있나 없나를 찾아주는 반복문
        temp.forEach((data, i) => {
            if(data.name === name) {    //있냐없냐 물어봄
                isHave = true;
                index = i;  //해당 과일이 있는 배열방 위치를 기억
            }
        });

        if(isHave) {
            temp[index].cnt++;
        } else {
            temp.push({'name':name, 'cnt':1});
        }

        temp=JSON.stringify(temp);
        localStorage.setItem('items', temp);

    } else {
        localStorage.setItem('items', JSON.stringify([{'name':name, 'cnt':1}]));
    }
});

let list = localStorage.getItem('items');
list = JSON.parse(list);

list.forEach((data)=> {
    $('.list').append(`<div>${data.name} : ${data.cnt} </div>`);
});