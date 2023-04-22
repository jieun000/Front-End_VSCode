// for(let i=1; i<=10; i++) {
//     document.write(i);
// }

// for(let i=1; i<=10; i++) {
//     document.write(`<h1>${i}</h1>`);
// }

// let i = 1;
// while(i<=10) {
//     document.write(`<h1>${i}</h1>`);
//     i++;
// }

// let i, j, cnt=0;
// for(i=0; i<=5; i++) {
//     for(j=0; j<=5; j++) {
//         cnt++;
//     document.write(`${cnt}<br>`);
//     }
// }


// 구구단 2단 ~ 9단까지 출력
// let i, j;

// for(i=2; i<=9; i++) {
//     for(j=1; j<=9; j++) {
//     document.write(`${i} * ${j} = ${i*j}<br>`);
//     }
// }   


// let i, j;
// for(i=1; i<=5; i++) {
//     for(j=1; j<=10; j++) {    
//         if(j%5 === 0) {
//             break;
//         }
//         document.write(j + "");
//     }
//     document.write("<br>");
// }


// for(i=1; i<=5; i++) {
//     for(j=1; j<=10; j++) {
//         if(j%5 === 0) {
//             continue;
//         }
//         document.write(j + "");
//     }
//     document.write("<br>");
// }

// outer:
// for(i=1; i<=5; i++) {
//     for(j=1; j<=10; j++) {
//         if(j%5 === 0) {
//             break outer;
//         }
//         document.write(j + "");
//     }
//     document.write("<br>");
// }

// outer:
// for(i=1; i<=5; i++) {
//     for(j=1; j<=10; j++) {
//         if(j%5 === 0) {
//             continue outer;
//         }
//         document.write(j + "");
//     }
//     document.write("<br>");
// }


/*  1부터 10까지의 짝수들을 출력(document.write)
    그 짝수들의 합까지 출력 */
// let i, sum=0;
// for(i=1; i<=10; i++) {
//     if(i%2===0 ) {
//         sum = sum + i;
//         document.write(`${i} <br>`);
//     }
// }
// document.write(` 총합: ${sum}`);


// let arr = [1,2,3,4,5];
// let arr = [1,2,'다른거',4,5];
// let arr2 = [];
// arr2[0] = 1;
// arr[0] = 10;
// arr[5] = 10;
// arr[10] = 'abc';
// for(let i=0; i<arr.length; i++) {
//     document.write(arr[i] + "<br>");
// }
