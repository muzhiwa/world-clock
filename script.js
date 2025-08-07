function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    if (losAngelesElement) {
        let losAngelesDatelement = losAngelesElement.querySelector(".date");
        let losAngelesTimelement = losAngelesElement.querySelector(".time");
        let losAngelesTime = moment().tz("America/Los_Angeles");

        losAngelesDatelement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
        losAngelesTimelement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>] A [</small>]");
    } 

    let torontoElement = document.querySelector("#toronto");
    if (torontoElement) {

        let torontoDatelement = torontoElement.querySelector(".date");
        let torontoTimelement = torontoElement.querySelector(".time");
        let torontoTime = moment().tz("America/Toronto");

        torontoDatelement.innerHTML = torontoTime.format("MMMM Do YYYY");
        torontoTimelement.innerHTML = torontoTime.format("hh:mm:ss [<small>] A [</small>]");
    }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
   if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}


updateTime();
setInterval(updateTime, 1000); 

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);