const API_KEY = "2cc09578d3556dd63936d42f3e2ed814";
//openwether 홈페이지에 내 계정 API Key에 있는 값이다

function onGeoOk(position){
    const lat = position.coords.latitude; 
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather= document.querySelector("#weather span:first-child");
        const city= document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`
        city.innerText = data.name;
    });
    //fetch를 통해서 javascript가 url을 부른다.
    //그 다음부분은 사실상 백엔드부분에서 많이 다루는 부분이라 일단 넘어감.
}

function onGeoError(){
    alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);
//이렇게 하면 위치정보가 그냥 나옴!!