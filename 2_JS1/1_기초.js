// alert('hello js');   바디에서 <scripe>태그로 쓰는 것과 동일
// console.log('hello');    콘솔창
// document.write('JS');   html 화면에 쓰기
// alert(3 + 1 + 2);    덧셈 됨

// let message; 자바로 치면 int
// message = 'hello';   메세지에 헬로우 문장 넣기
// console.log(message);    콘솔창에 메세지 출력
// message = 12345;
// console.log(message);    뜨긴 하는데 아마 문장으로 출력된 것인가?


// ???
// const COLOR_RED = '#f00';
// const COLOR_BLUE = '#f1';

// let color = COLOR_RED;

// // 네비 바 색
// console.log(BOLOR_BLUE);
// // 컨테이너 색
// console.log(BOLOR_BLUE);
// // footer 색
// console.log(BOLOR_BLUE);


//문자
// let str = 'hello';
// let str2 = 'js';
// let str3= str2 + `aaaa`+ str;
// let str3= `aaaa ${str2}`;    `과$는 +와 띄어쓰기 안 해도 됨

// console.log(str);
// console.log(str2);
// console.log(str3);
// console.log(str + `js`);
// console.log(`${str3} js`);   
// console.log(`${1 + 2} js`);

// console.log("계산식: "+ 1 + 1);
// console.log("계산식: "+ (1 + 1));
// console.log(`계산식: ${1 + 1}`);

//boolean
// let a = true;
// let b = 5 > 1;
// console.log(b);

// let a; //할당안함
// console.log(a); //undefined
// let a = null;   //비어있음
// console.log(a);  //null

// let a = true;
// let a = 3.14;
// console.log(typeof(a)); //boolean number
// console.log(typeof a);  //boolean number

// let n = "js";
// alert(`hello ${1+1}`);
// alert(`hello ${"n"}`);  //n
// alert(`hello ${n}`);    //js

// alert('hello');
// let a = prompt('hello'); // prompt입력창생성
// let a = prompt('나이 입력', 20); // 위+예시문
// console.log(a);

// let a = prompt('나이 입력', 20);
//prompt로 입력받은 값은 문자
// let a = Number( prompt('나이 입력', 20) );
// alert(typeof(a));
// alert(`반갑습니다 ${a +1}살`);

// let a = confirm('이거 맞음?');
// alert(a);   출력문과 true

//형 변환
// let a = true;
// alert(typeof a);    //boolean
// a = String(a);
// alert(typeof a);    //string 됨

// alert('6' / '2');
// alert(2**5);

// let a,b,c;
//5로 초기값을 주고싶음
// a = b = c = 5;
// console.log(`a : ${a}`);
// console.log(`b : ${b}`);
// console.log(`c : ${c}`);

// console.log(0==false);  //true
// console.log(1=='1');    //true
// console.log(1!='1');    //false
// console.log(1 !=='1');   //true 유형이다름