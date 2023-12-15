let searchItem = document.getElementById("SearchBox");
// console.log(searchItem)

searchItem.addEventListener("keyup", e => {
  //   console.log(e);
  if (e.key === "Enter") {
    let res = e.target.value;
    getApiResult(res);
  }
});

let getApiResult = async locationName => {
  let response = await window.fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=${locationName}&APPID=7d1e6ee412eec4d0355e16f902239093`
  );
  console.log(response);
  let data = await response.json();
  console.log(data);
  let rightBar = document.getElementById("RightsideBar");
  //   console.log(rightBar);
  rightBar.innerHTML = `<div class="card">
  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
  <div class="info">
  <h1 class="header">Location :${data.name}</h1>
  <p><b>Temperature: </b>${data.main.temp}</p>
  <p><b>Maximum- Temperature: </b>${data.main.temp_max}</p>
  <p><b>Minimum- Temperature:</b>${data.main.temp_min}</p>
  <p><b>Humidity: </b>${data.main.humidity}</p>
  <p><b>Pressure: </b>${data.main.pressure}</p>

  <p><b>Wind Direction:</b> ${data.wind.deg} degree</p>
  <p><b>Wind Speed:</b> ${data.wind.speed}</p>
  <p><b>Weather situation:</b> ${data.weather[0].description}</p>


  </div>
  </div>`;
};
