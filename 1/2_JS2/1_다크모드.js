let cnt = 0; //클릭횟수를 저장하는 변수

let mode = document.querySelector('#mode');  //보통은 이렇게해서 중복 간단하게 처리함
mode.addEventListener('click', function() {

//JS버전
    document.querySelector('#mode').addEventListener('click', function() {
        cnt++;

        if(cnt % 2 ===1) {
        //버튼에 글씨가 라이트 모드랑 다크모드 왔다갔다 해야함
        document.querySelector('#mode').setAttribute('value', '라이트모드'); //아래 간략히
            // document.querySelector('#mode').value='라이트모드'; 

            //버튼 글씨가 다크모드일 때에는 배경색 검정 글꼴색 흰색
            document.body.style.background = 'black';
            document.body.style.color = 'white';
            
        } else {
            document.querySelector('#mode').value='다크모드'; 

            //버튼 글씨가 라이트모드일 때에는 배경 흰색 글꼴색 검정
            document.body.style.background = 'white';
            document.body.style.color = 'black';
        }
    })
});

//jQuery버전
//     $('#mode').on('click', function() {
//         cnt++;
//         if(cnt % 2 ===1) {
//             $('#mode').attr('value', '라이트모드');
//             // $('#mode').val('라이트모드');
//             $('body').css('backgroundColor', 'black');
//             $('body').css('color', 'white');
//         } else {
//             $('#mode').attr('value', '다크모드');
//             // $('#mode').val('다크모드');
//             $('body').css('backgroundColor', 'white');
//             $('body').css('color', 'black');
//         }
//     });
// });