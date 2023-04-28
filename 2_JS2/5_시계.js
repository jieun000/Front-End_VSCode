// const date = new Date();
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// console.log(date.getHours() + ':' + date.getMinutes() + ":" + date.getSeconds());

// function showClock() {
// const date = new Date();
// console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
// }
// setInterval(showClock, 1000);



// let clock = document.querySelector('.clock');
// function showClock() {
//     const date = new Date();
//     clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// setInterval(showClock, 1000);


// let clock = document.querySelector('.clock');
// function showClock() {
//     const date = new Date();
//     clock.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
// }
// // showClock();
// setInterval(showClock, 1000);



let clock = document.querySelector('.clock');
function showClock() {
    const date = new Date();
    let hour = String(date.getHours()).padStart(2, 0);
    let minute = String(date.getMinutes()).padStart(2, 0);
    let second = String(date.getSeconds()).padStart(2, 0);

    clock.innerHTML = `${hour}:${minute}:${second}`;
}
showClock();
setInterval(showClock, 1000);