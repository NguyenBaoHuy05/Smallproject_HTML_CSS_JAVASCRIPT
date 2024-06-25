const weatherform = document.querySelector(".weatherform");
const city = document.querySelector(".city");
const card = document.querySelector(".card");
const key = ""; //your api

weatherform.addEventListener("submit", async (event) => {
  event.preventDefault();

  const valcity = city.value.trim();

  if (valcity === "") {
    displayError("Please enter city");
  } else {
    try {
      const data = await getData(valcity, key);
      display(data);
    } catch (error) {
      displayError("Could not fetch weather data");
    }
  }
});

async function getData(city, key) {
  const link = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
  const response = await fetch(link);

  if (!response.ok) {
    throw new Error(`Error fetching data: ${response.statusText}`);
  }

  const data = await response.json();
  return data;
}

function display(data) {
  card.textContent = "";
  card.style.display = "flex";

  const name = document.createElement("h1");
  const tem = document.createElement("p");
  const humid = document.createElement("p");
  const wind = document.createElement("p");
  const des = document.createElement("p");
  const emoji = document.createElement("p");
  const time = document.createElement("p");

  name.textContent = `${data.name}, ${data.sys.country}`;
  tem.textContent = `${(data.main.temp - 273.15).toFixed(2)} °C`;
  humid.textContent = `Humidity: ${data.main.humidity}%`;
  wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;
  des.textContent = data.weather[0].description;
  emoji.textContent = getemoji(data.weather[0].id);
  time.textContent = `Local Time: ${new Date(data.dt * 1000).toLocaleString()}`;

  name.classList.add("name");
  tem.classList.add("tem");
  humid.classList.add("humid");
  wind.classList.add("wind");
  des.classList.add("des");
  emoji.classList.add("emoji");
  time.classList.add("time");

  card.appendChild(name);
  card.appendChild(tem);
  card.appendChild(humid);
  card.appendChild(wind);
  card.appendChild(des);
  card.appendChild(emoji);
  card.appendChild(time);
}

function getemoji(id) {
  sd = Math.floor(id / 100);
  switch (sd) {
    case 2:
      return "⛈️";
      break;
    case 3:
      return "🌧️";
      break;
    case 4:
      return "🌧️";
      break;
    case 5:
      return "🌦️";
      break;
    case 6:
      return "❄️";
      break;
    case 7:
      return "🌫️";
      break;
    case 8:
      if (id === 800) return "☀️";
      else return "☁️";
      break;
    default:
      return "❓";
  }
}

function displayError(message) {
  card.textContent = "";
  card.style.display = "flex";
  const er = document.createElement("p");
  er.textContent = message;
  er.classList.add("not");
  card.appendChild(er);
}
