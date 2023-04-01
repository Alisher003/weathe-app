const search = document.querySelector(".search-btn");

search.addEventListener("click", (evt) => {
  evt.preventDefault();
  const APIKey = "fca39815ffe5e1bbcc6cd46ab69797ae ";
  const city = document.querySelector(".search-input").value;

  if (city === "") return;
    
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      if (json.cod === "404") {
        return;
        
      }

      const temperature = document.querySelector("#temperature");
      const City = document.querySelector("#City");
      const humidity = document.querySelector("#humidity");
      const wind = document.querySelector("#wind");

      City.innerHTML = city;
      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;
      
    });

});


