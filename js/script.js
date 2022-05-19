window.addEventListener("load", () => {
  let lon;
  let lat;

  let temperaturaValor = document.getElementById("temperatura-valor");

  let temperaturaDescripcion = document.getElementById(
    "temperatura-descripcion"
  );

  let ubicacion = document.getElementById("ubicacion");

  let iconoAnimado = document.getElementById("icono-animado");

  let vientoVelocidad = document.getElementById("viento-velocidad");

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((posicion) => {
      //   console.log(posicion.coords.latitude);

      lon = posicion.coords.longitude;
      lat = posicion.coords.latitude;

      // ubicacion actual
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4f6350d8d35448b1f6da59d57466bd59&units=metric`;

      // ubicacion por ciudad
      // const url = `https://api.openweathermap.org/data/2.5/weather?q=Bogota&lang=es&units=metric&appid=4f6350d8d35448b1f6da59d57466bd59`;

      //   console.log(url);

      fetch(url)
        .then((response) => {
          return response.json();
        })

        .then((data) => {
          let temp = Math.round(data.main.temp);
          temperaturaValor.textContent = `${temp} ºC`;

          let desc = data.weather[0].description;

          temperaturaDescripcion.textContent = desc.toUpperCase();

          ubicacion.textContent = data.name;

          vientoVelocidad.textContent = `${data.wind.speed} m/s`;

          // para iconos animados
          console.log(data.weather[0].main);
          iconoAnimado.src = `animated/${data.weather[0].main}.svg`;

          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
});
