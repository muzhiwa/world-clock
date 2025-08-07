function updateTime() {

    let losAngelesElement = document.querySelector("#los-angeles");
    let losAngelesDatelement = losAngelesElement.querySelector(".date");
    let losAngelesTimelement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDatelement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimelement.innerHTML = losAngelesTime.format("hh:mm:ss [<small>] A [</small>]");

    let torontoElement = document.querySelector("#toronto");
    let torontoDatelement = torontoElement.querySelector(".date");
    let torontoTimelement = torontoElement.querySelector(".time");
    let torontoTime = moment().tz("America/Toronto");

    torontoDatelement.innerHTML = torontoTime.format("MMMM Do YYYY");
    torontoTimelement.innerHTML = torontoTime.format("hh:mm:ss [<small>] A [</small>]");
}

updateTime();
setInterval(updateTime, 1000); 