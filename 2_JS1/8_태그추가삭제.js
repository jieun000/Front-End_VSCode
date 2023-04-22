// 태그.append: 해당 태그 끝에 추가
// 태그.prepend: 맨 앞에 추가
// 태그.before: 태그 이전에 삽입
// 태그.after: 태그 이후에 삽입

// let div = document.createElement('div')
// div.className = 'alert';
// div.innerHTML = '<b>ㅎㅇ</b>';
// document.body.append(div);

// ol.before('이전');
// ol.after('이후');

// let a = document.createElement('li');
// a.innerHTML = '앞에';
// ol.prepend(a);
// let b = document.createElement('li');
// b.innerHTML = '뒤에';
// ol.append(b, '<li>ㅎㅇ</li>');
// //?
// div.insertAdjacentHTML('beforebegin','<b>ㅎㅇ</b>');
// ol.insertAdjacentHTML('afterbegin',
// `<li class = 'a'>앞에 추가함 </li>`);


// let div = document.createElement('div')
// div.className = 'alert';
// div.innerHTML = '<b>ㅎㅇ</b>';
// document.body.append(div);
// setTimeout(() => div.remove(), 3000);


// second.after(first);

// let div2 = div.cloneNode(true); //false이면 복사안됨
// div2.querySelector('b').innerHTML = 'ㅂㅇ';
// div.after(div2);


// let a = document.createElement('p');
// a.innerHTML = 'p태그 추가';
// div.appendChild(a);
// setTimeout(() => document.write('<b>아주 옛날</b>'), 3000);