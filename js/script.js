const key = "4f6350d8d35448b1f6da59d57466bd59";
const temperaturaValor = document.getElementById("temperatura-valor");

const temperaturaDescripcion = document.getElementById(
  "temperatura-descripcion"
);

const ubicacion = document.getElementById("ubicacion");

const iconoAnimado = document.getElementById("icono-animado");

const vientoVelocidad = document.getElementById("viento-velocidad");

window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      //   console.log(posicion.coords.latitude);

      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;

      // ubicacion actual
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

      // ubicacion por ciudad
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&units=metric&appid=${key}&units=metric`;

      //   console.log(url);

      fetch(url)
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          updateWeather(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
});

function updateWeather(weather) {
  console.log(weather);
  let temp = Math.round(weather.main.temp);
  temperaturaValor.textContent = `${temp} ºC`;

  let desc = weather.weather[0].description;

  temperaturaDescripcion.textContent = desc.toUpperCase();

  ubicacion.textContent = weather.name;

  vientoVelocidad.textContent = `${weather.wind.speed} m/s`;

  iconoAnimado.src = `animated/${weather.weather[0].main}.svg`;
}
