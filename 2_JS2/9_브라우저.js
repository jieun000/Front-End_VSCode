menu.onclick = function(event) {
    // let url = event.target.getAttribute('href');
    // alert(url);

    console.log(event.defaultPrevented); // false
    // return false;
    event.preventDefault();
    console.log(event.defaultPrevented); // true
};