let cintyName = document.querySelector('#cityinput');
let description = document.querySelector('#description .desc')
let temp = document.querySelector('#temperature')
let wind = document.querySelector('#wind')
let visibility = document.querySelector('#visibility')
let humidity = document.querySelector('#humidity')
let city = document.querySelector('#location')
let loader = document.querySelector('.overlay')
const apik = '6730e01de2fb7b3ce6789a58f09fde8e'

function getWeatherData(cityName, apikey){
    loader.style.display = 'block'
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&appid='+apikey+'&units=metric')
    .then(res => res.json())
    .then(data => 
    {
        city.innerText =data['name']
        temp.innerText  = parseInt(data['main']['temp']) + '°C'
        humidity.innerText  = parseInt(data['main']['humidity']) + '%'
        description.innerText  = data['weather']['0']['description']
        wind.innerText  = data['wind']['speed']
        visibility.innerText  = data['visibility']
        loader.style.display = 'none'

    })
    .catch(err => alert('You entered Wrong city name'))

}

document.getElementById('submitcityname').addEventListener('click', function(){
    getWeatherData( cintyName.value, apik ); 
});

