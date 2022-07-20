function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentYear = date.getFullYear();
  let currentDay = days[date.getDay()];
  let currentMonth = months[date.getMonth()];
  let currentDate = date.getDate();
  let currentHour = date.getHours();
  if (currentHour < 10) {
    currentHour = `0${currentHour}`;
  }

  let currentMinutes = date.getMinutes();
  if (currentMinutes < 10) {
    currentMinutes = `0${currentMinutes}`;
  }
  let formattedDate = `<strong>${currentMonth} ${currentDate}, ${currentYear}</strong></br>${currentDay}, ${currentHour}:${currentMinutes}`;

  return formattedDate;
}

function showTemperature(response) {
  //tempereature update
  let temperature = Math.round(response.data.main.temp);
  let placeTemp = document.querySelector("#tempValue");
  placeTemp.innerHTML = `${temperature}`;
  //location title update
  let searchLocation = response.data.name;
  let country = response.data.sys.country;
  const countryListAlpha2 = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "The Bahamas",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Plurinational State of Bolivia",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "The British Indian Ocean Territory",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CV: "Cabo Verde",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    KY: "The Cayman Islands",
    CF: "The Central African Republic",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "The Cocos (Keeling) Islands",
    CO: "Colombia",
    KM: "The Comoros",
    CD: "The Democratic Republic of the Congo",
    CG: "The Congo",
    CK: "The Cook Islands",
    CR: "Costa Rica",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czechia",
    CI: "Côte d'Ivoire",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "The Dominican Republic",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    SZ: "Eswatini",
    ET: "Ethiopia",
    FK: "The Falkland Islands ",
    FO: "The Faroe Islands",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "The French Southern Territories",
    GA: "Gabon",
    GM: "The Gambia",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and McDonald Islands",
    VA: "The Holy See",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Islamic Republic of Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "The Democratic People's Republic of Korea",
    KR: "The Republic of Korea",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "The Lao People's Democratic Republic",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "The Marshall Islands",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Federated States of Micronesia",
    MD: "The Republic of Moldova",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "The Netherlands",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "The Niger",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "The Northern Mariana Islands",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "State of Palestine",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "The Philippines",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    MK: "Republic of North Macedonia",
    RO: "Romania",
    RU: "The Russian Federation",
    RW: "Rwanda",
    RE: "Réunion",
    BL: "Saint Barthélemy",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin (French part)",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten (Dutch part)",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "The Sudan",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "United Republic of Tanzania",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "The Turks and Caicos Islands",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "The United Arab Emirates",
    GB: "The UK",
    UM: "The United States Minor Outlying Islands",
    US: "The USA",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Bolivarian Republic of Venezuela",
    VN: "Viet Nam",
    VG: "Virgin Islands (British)",
    VI: "Virgin Islands (U.S.)",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland Islands",
  };

  let placeCity = document.querySelector("#city");
  placeCity.innerHTML = `${searchLocation}, `;
  let placeCountry = document.querySelector("#country");
  placeCountry.innerHTML = `${countryListAlpha2[country]}`;

  // weather icon update
  let emojiCode = response.data.weather[0].icon;
  document.querySelector(
    "#key-emoji"
  ).src = `https://openweathermap.org/img/wn/${emojiCode}@2x.png`;

  // emoji description
  let emojiDescription = response.data.weather[0].description;
  emojiDescription =
    emojiDescription.charAt(0).toUpperCase() + emojiDescription.slice(1);
  let emojiPlace = document.querySelector("#icon-description");
  emojiPlace.innerHTML = `${emojiDescription}`;

  //humidity update
  let humidity = response.data.main.humidity;
  let placeHumidity = document.querySelector("#humidity");
  placeHumidity.innerHTML = `<bold>${humidity}</bold>`;
  // wind speed update
  let wind = Math.round(response.data.wind.speed);
  let placeWind = document.querySelector("#wind");
  placeWind.innerHTML = `${wind}`;
}

function determineCurrentLocationTempC(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0774011ae8c6615118624b282251a3f1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  let unitMetric = document.querySelector("#unit");
  unitMetric.innerHTML = `m/s`;
  axios.get(apiUrl).then(showTemperature);
}

function determineCurrentLocationTempF(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "0774011ae8c6615118624b282251a3f1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
}

function determineSearchLocationTempC(location) {
  document.querySelector("#celsius").focus();
  let search = document.querySelector("#searchInput");
  if (search.value !== "") {
    location = search.value;
  } else {
    location = location1;
  }
  let unitMetric = document.querySelector("#unit");
  unitMetric.innerHTML = `m/s`;
  let apiKey = "0774011ae8c6615118624b282251a3f1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function determineSearchLocationTempF(location) {
  let search = document.querySelector("#searchInput");
  if (search.value !== "") {
    location = search.value;
  } else {
    location = location1;
  }
  let apiKey = "0774011ae8c6615118624b282251a3f1";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=${apiKey}`;
  axios.get(apiUrl).then(showTemperature);
}

function citySearchEvent(event) {
  event.preventDefault();
  window.currentLocationState = false;
  navigator.geolocation.getCurrentPosition(determineSearchLocationTempC);
}
function showCurrentLocationEvent(event) {
  event.preventDefault();
  window.currentLocationState = true;
  document.querySelector("#celsius").focus();
  navigator.geolocation.getCurrentPosition(determineCurrentLocationTempC);
}

function changeCforF(event) {
  event.preventDefault();
  if (window.currentLocationState === false) {
    navigator.geolocation.getCurrentPosition(determineSearchLocationTempF);
  } else {
    navigator.geolocation.getCurrentPosition(determineCurrentLocationTempF);
  }
  let unitImperial = document.querySelector("#unit");
  unitImperial.innerHTML = `mi/h`;
}
function changeFforC(event) {
  event.preventDefault();
  if (window.currentLocationState === false) {
    navigator.geolocation.getCurrentPosition(determineSearchLocationTempC);
  } else {
    navigator.geolocation.getCurrentPosition(determineCurrentLocationTempC);
  }
  let unitMetric = document.querySelector("#unit");
  unitMetric.innerHTML = `m/s`;
}

//Display current time
let currentTime = new Date();

//Format the date
let element = document.querySelector("#current-time");
element.innerHTML = `${formatDate(currentTime)}`;

//Search for the city of interest
let form = document.querySelector("#search-form");
form.addEventListener("submit", citySearchEvent);

//Show temperature at your current location
let currentLocation = document.querySelector("#current-location");
currentLocation.addEventListener("click", showCurrentLocationEvent);

//Change Celsius for Fahrenheit and back

let f = document.querySelector("#fahrenheit");
f.addEventListener("click", changeCforF);

let c = document.querySelector("#celsius");
c.addEventListener("click", changeFforC);

//Default location
var location1 = "Kyiv";
window.currentLocationState = false;
determineSearchLocationTempC(location1);
