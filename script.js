
var button = document.getElementById("buttx");

function getWeather(){
	const apiKey = '2ecd147675013e1b8e49f09a607977e5';
	const cityInput = document.getElementById('cityInput').value;
	if(!cityInput){
		alert('please enter a city');
		return;
	}
	const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

	fetch(apiUrl)
	 .then(response=> response.json())
	 .then(data=>{
	 	console.log(data);
	 	displayWeather(data);
	 })
	 .catch(error => {
	 	console.error('Error fetching weather')
	 });

}

function displayWeather(data){
	const weatherInfo = document.getElementById('weatherInfo');
	if(!data || !data.main || !data.weather || data.weather.length === 0) {
		weatherInfo.innerHTML = '<p>Weather data not available</p>';
		return;
	}
    
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "℃";
	document.querySelector(".feels").innerHTML = Math.round(data.main.feels_like) + "℃";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    cityInput.value = '';
    document.querySelector("#weatherInfo").style.display = "block";
}

function keyBoardEnter(event){
	if(cityInput.value.length > 0 && event.keyCode === 13){
		getWeather();
	}
}

button.addEventListener("click", getWeather)
cityInput.addEventListener("keypress", keyBoardEnter)