const key = "4f6350d8d35448b1f6da59d57466bd59";

const temperaturaValor = document.getElementById("temperatura-valor");
const temperaturaDescripcion = document.getElementById(
  "temperatura-descripcion"
);
const ubicacion = document.getElementById("ubicacion");
const iconoAnimado = document.getElementById("icono-animado");
const vientoVelocidad = document.getElementById("viento-velocidad");

const searchCityForm = document.getElementById("searchCityForm");
const searchCityInput = document.getElementById("searchCityInput");
searchCityForm.onsubmit = searchCity;

const cityArray = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "AmericanSamoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "AntiguaandBarbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bonaire",
  "BosniaandHerzegovina",
  "Botswana",
  "BouvetIsland",
  "Brazil",
  "BritishIndianOceanTerritory",
  "BruneiDarussalam",
  "Bulgaria",
  "BurkinaFaso",
  "Burundi",
  "CaboVerde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "CaymanIslands",
  "CentralAfricanRepublic",
  "Chad",
  "Chile",
  "China",
  "ChristmasIsland",
  "CocosIslands",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo",
  "CookIslands",
  "CostaRica",
  "Croatia",
  "Cuba",
  "Curaçao",
  "Cyprus",
  "Czechia",
  "Côted'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "DominicanRepublic",
  "Ecuador",
  "Egypt",
  "ElSalvador",
  "EquatorialGuinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "FalklandIslands",
  "FaroeIslands",
  "Fiji",
  "Finland",
  "France",
  "FrenchGuiana",
  "FrenchPolynesia",
  "FrenchSouthernTerritories",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guadeloupe",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guyana",
  "Haiti",
  "HeardIslandandMcDonaldIslands",
  "HolySee",
  "Honduras",
  "HongKong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "IsleofMan",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea",
  "Korea",
  "Kuwait",
  "Kyrgyzstan",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macao",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "MarshallIslands",
  "Martinique",
  "Mauritania",
  "Mauritius",
  "Mayotte",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "NewCaledonia",
  "NewZealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Niue",
  "NorfolkIsland",
  "NorthernMarianaIslands",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Palestine,Stateof",
  "Panama",
  "PapuaNewGuinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Pitcairn",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Republic of North Macedonia",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Réunion",
  "Saint Barthélemy",
  "Saint Helena",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Martin",
  "Saint Pierre and Miquelon",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Sint Maarten",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Georgia and the South Sandwich Islands",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Svalbard and Jan Mayen",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tokelau",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks and Caicos Islands",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom of Great Britain and Northern Ireland",
  "United States Minor Outlying Islands",
  "United States of America",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Virgin Islands",
  "Virgin Islands",
  "Wallis and Futuna",
  "Western Sahara",
  "Yemen",
  "Zambia",
  "Zimbabwe",
  "Åland Islands",
];

cityArray.forEach((city) => {
  searchCityInput.innerHTML += `<option value="${city}">${city}</option>`;

  console.log(searchCityInput.innerHTML);
});

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

// let buttonWeather = document.querySelector("#search-weather");

function searchCity(event) {
  event.preventDefault();

  // ubicacion por ciudad
  const urlToGetCity = `https://api.openweathermap.org/data/2.5/weather?q=${searchCityInput.value}&lang=es&units=metric&appid=${key}&units=metric`;
  console.log(urlToGetCity);

  fetch(urlToGetCity)
    .then((response) => {
      return response.json();
    })

    .then((data) => {
      updateWeather(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
