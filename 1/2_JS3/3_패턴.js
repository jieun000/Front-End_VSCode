const regexId = /^\w{8,20}$/;
const regexPw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
const regexMail = /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/;
const regexTel = /^\d{2,3}-\d{3,4}-\d{4}$/;

// // 올바르게 입력했는지를 저장해주는 변수들
// let isId = false;
// // 버튼들
// const idBtn = document.querySelector('#id_confirm');
// // 유효성 검사 후 결과를 표시해주는 p태그들
// let idCheck = document.querySelector('.id_input_check');
// idBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     // console.log(document.querySelector('#id_txt').value);
//     let val = document.querySelector('#id_txt').value;
//     // console.log(regexId.test(val));
//     if( regexId.test(val) ) {
//         isId = true;
//         idCheck.innerHTML = "사용 가능한 아이디입니다.";
//         idCheck.style.color = "green";
//     } else {
//         isId = false;
//         idCheck.innerHTML = "사용 불가능한 아이디입니다.";
//         idCheck.style.color = "red";
//     }
// });


//이제 네 개
// 올바르게 입력했는지를 저장해주는 변수들
// let isId = false;
// let isPw = false;
// let isEmail = false;
// let isPhone = false;
// // 버튼들
// const idBtn = document.querySelector('#id_confirm');
// const pwBtn = document.querySelector('#pw_confirm');
// const emailBtn = document.querySelector('#email_confirm');
// const phoneBtn = document.querySelector('#phone_confirm');
// // 유효성 검사 후 결과를 표시해주는 p태그들
// let idCheck = document.querySelector('.id_input_check');
// let pwCheck = document.querySelector('.pw_input_check');
// let emailCheck = document.querySelector('.email_input_check');
// let phoneCheck = document.querySelector('.phone_input_check');
// idBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     // console.log(document.querySelector('#id_txt').value);
//     let val = document.querySelector('#id_txt').value;
//     // console.log(regexId.test(val));
//     if( regexId.test(val) ) {
//         isId = true;
//         idCheck.innerHTML = "사용 가능한 아이디입니다.";
//         idCheck.style.color = "green";
//     } else {
//         isId = false;
//         idCheck.innerHTML = "사용 불가능한 아이디입니다.";
//         idCheck.style.color = "red";
//     }
//     isOk();
// });
// pwBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     let val = document.querySelector('#pw_txt').value;
//     if( regexPw.test(val) ) {
//         isPw = true;
//         pwCheck.innerHTML = "사용 가능한 비밀번호입니다.";
//         pwCheck.style.color = "green";
//     } else {
//         isPw = false;
//         pwCheck.innerHTML = "사용 불가능한 비밀번호입니다.";
//         pwCheck.style.color = "red";
//     }
//     isOk();
// });
// emailBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     let val = document.querySelector('#email_txt').value;
//     if( regexMail.test(val) ) {
//         isEmail = true;
//         emailCheck.innerHTML = "사용 가능한 이메일입니다.";
//         emailCheck.style.color = "green";
//     } else {
//         isEmail = false;
//         emailCheck.innerHTML = "사용 불가능한 이메일입니다.";
//         emailCheck.style.color = "red";
//     }
//     isOk();
// });
// phoneBtn.addEventListener('click', function(e) {
//     e.preventDefault();
//     let val = document.querySelector('#phone_txt').value;
//     if( regexTel.test(val) ) {
//         isPhone = true;
//         phoneCheck.innerHTML = "사용 가능하다.";
//         phoneCheck.style.color = "green";
//     } else {
//         isPhone = false;
//         phoneCheck.innerHTML = "사용 불가능하다.";
//         phoneCheck.style.color = "red";
//     }
//     isOk();
// });
// function isOk() {
//     if(isId && isPw && isEmail && isPhone) {
//         document.querySelector('.reg_req_btn').style.background = 'blue';
//     }
// }



let isId = false;
let isPw = false;
let isEmail = false;
let isPhone = false;
// 버튼들
const idBtn = document.querySelector('#id_confirm');
const pwBtn = document.querySelector('#pw_confirm');
const emailBtn = document.querySelector('#email_confirm');
const phoneBtn = document.querySelector('#phone_confirm');
// 유효성 검사 후 결과를 표시해주는 p태그들
let idCheck = document.querySelector('.id_input_check');
let pwCheck = document.querySelector('.pw_input_check');
let emailCheck = document.querySelector('.email_input_check');
let phoneCheck = document.querySelector('.phone_input_check');
idBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let val = document.querySelector('#id_txt').value;

    isId = regexId.test(val);
    showMsg(isId, idCheck);

    isOk();
});
pwBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let val = document.querySelector('#pw_txt').value;

    isPw = regexPw.test(val);
    showMsg(isPw, pwCheck);
   
    isOk();
});
emailBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let val = document.querySelector('#email_txt').value;

    isEmail = regexMail.test(val);
    showMsg(isEmail, emailCheck);
   
    isOk();
});
phoneBtn.addEventListener('click', function(e) {
    e.preventDefault();
    let val = document.querySelector('#phone_txt').value;

    isPhone = regexTel.test(val);
    showMsg(isPhone, phoneCheck);
   
    isOk();
});
function showMsg(isX, xCheck) {
    if(isX) {
        xCheck.innerHTML = "사용가능";
        xCheck.style.color = 'green';
    } else {
        xCheck.innerHTML = "불가능";
        xCheck.style.color = 'red';
    }
    isOk();
}