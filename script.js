
document.getElementById('setlocation').addEventListener('click', getcityweatherdata)

function getcityweatherdata() {

   // get cityname from input tag
   let cityname = document.getElementById('searchlocation').value;

   const apiurl = " https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=b45a65dcd5eca22b2170426666d39a20&units=metric";

   fetch(apiurl)
      .then(function (response) {
         return response.json();
      })
      .then(
         function (data) {
            getcity(data);
         }
      )
}


function getcity(data) {
   // time and days 
   let allweeks = ["sunday", "monday", "tuesday", "wensday", "thirsday", "friday", "saturday"];
   let allmonths = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sept", "oct", "nov", "dec"];
   let date = new Date(data.dt * 1000);
   document.getElementById("weekname").innerText = allweeks[date.getDay()];
   document.getElementById("location").innerText = data.name;
   document.getElementById("date").innerText = date.getDate() + " / " + allmonths[date.getMonth()] + " / " + date.getFullYear();
   
   document.querySelector('.description').innerText = `this is the ${data.name} daily data which provide by the free weather API`
   // weather icon 
   // document.getElementById("changableicon").src ="icons/"+data.weather[0].icon+".svg" ;
   document.getElementById("changableicon").src = "icons/" + data.weather[0].icon + ".svg";
   document.getElementById("temp").innerText = Math.round(data.main.temp) + " °C";
   document.getElementById("description").innerText = data.weather[0].description;
   document.getElementById("humidity").innerText = data.main.humidity + " %";
   document.getElementById("wind-speed").innerText = data.wind.speed + " km/h";
}