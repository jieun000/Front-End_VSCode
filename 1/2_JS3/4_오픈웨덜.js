const API_KEY = '8a6a1e856e8f61ecbf66ac1e4f5a529b'; //https://openweathermap.org/current
let name = document.querySelector('#name');
let main = document.querySelector('#main');
let temp = document.querySelector('#temp');
function connect(position) {
    // alert('위치연결 성공');
    // console.log(position); // 위도&경도 확인
    // console.log(position.coords.latitude);   // 위도
    // console.log(position.coords.longitude);  // 경도
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    console.log(`위도:${lat} 경도:${lon}`)
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
                    //https://openweathermap.org/current APL call
    // console.log(URL);    
    fetch(URL).then((response) => response.json())
              .then((data) => {
                    console.log(data.name); //지역이름
                    console.log(data.weather[0].main);  //날씨
                    console.log(data.main.temp);    //온도

                    name.innerHTML = data.name;
                    main.innerHTML = data.weather[0].main;
                    temp.innerHTML = data.main.temp + '℃';    //ㄹ한자
                });
}
function errorConn() {
    alert('위치연결 실패');
}
// navigator.geolocation.getCurrentPosition(함수, 함수);
navigator.geolocation.getCurrentPosition(connect, errorConn);