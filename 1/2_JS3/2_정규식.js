// 정규식(Regular Expression)
// const regex = /정규식/;
// const regexp = new RegExpd('정규식');

// /패턴/플래그

// const regex = /abc/;    //abc 똑같은 거 있냐없냐 찾아줌
// let result;
// let text = '가나다 abC 123 abc';
//정규식 메서드(함수)
// test메서드: 문자열이 정규식에 매칭되는게 있으면 true, 아니면 false를 리턴
// result = regex.test('가나다 abc 123');  //true
// result = regex.test('가나다 ac 123');   //false
// result = regex.test(text);  /// true
// console.log(result);



// const regex = /abc/;    //abc 똑같은 거 있냐없냐 찾아줌
// let result;
// let text = '가나다 abc 123';

// // test메서드: 문자열이 정규식에 매칭되는게 있으면 true, 아니면 false를 리턴
// // result = regex.test('가나다 abc 123');  //true
// // result = regex.test('가나다 ac 123');   //false
// result = regex.test(text);  ///???false
// console.log(result);
// // match메서드: 문자열에서 정규식에 매칭되는 값을 배열로 리턴
// result = text.match(regex);
// console.log(result[0]);
// // replace: 문자열에서 정규식에 매칭되는 값을 2번째 인수로 바꿈
// result = text.replace(regex, 'xyz');
// console.log(result);



//정규식에 대한 검색 옵션
// i: 대소문자 구별 안함
// g: 문자열의 모든 패턴을 찾음
// m : 줄바꿈이 되도 검색 계속 함
// const regex = /abc/i;   
// const regex = /abc/igm;
// let result;
// let text = '가나다 abC 123 abc';

// // test메서드: 문자열이 정규식에 매칭되는게 있으면 true, 아니면 false를 리턴
// // result = regex.test('가나다 abc 123');  //true
// // result = regex.test('가나다 ac 123');   //false
// result = regex.test(text);
// console.log(result); // true
// // match메서드: 문자열에서 정규식에 매칭되는 값을 배열로 리턴
// result = text.match(regex);
// console.log(result[0]); //abC
// // replace: 문자열에서 정규식에 매칭되는 값을 2번째 인수로 바꿈
// result = text.replace(regex, 'xyz');
// console.log(result); // 가나다 xyz 123 xyz