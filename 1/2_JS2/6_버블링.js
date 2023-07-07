form.onclick = function(event) {
    event.target.style.backgroundColor = 'yellow';

    console.log(event.target.tagName);
    console.log(this.tagName);
}


// document.querySelector('p').addEventListener('click', function(e) {
//     //뭔가 작동할거 해주고
//     alert('aaa');

//     e.stopImmediatePropagation();
// });