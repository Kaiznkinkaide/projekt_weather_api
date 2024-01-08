let timeBox = document.getElementById('timeBox')
let windBox = document.getElementById('windBox')
let cloudsBox = document.getElementById("cloudsBox")
let pressureBox = document.getElementById("pressureBox")
let humitidyBox = document.getElementById("humitidyBox")
let sunsetBox = document.getElementById("sunsetBox")
let sunriseBox = document.getElementById("sunriseBox")
let coordsBox = document.getElementById("coordsBox")
let cityBox = document.getElementById('cityName')
let nebeneinanderBox = document.getElementById('nebeneinanderBox')
let countryCodeBox = document.getElementById('countryCodeBox')



const check = () => {

    let timeOutput = document.getElementById('timeBox')
    
    const reset = () =>{
        timeOutput.innerHTML = " "
    }
    reset()

let input = document.getElementById('input').value
console.log(input);

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4bcea2e105b56117dc4f5cdd3a2391fd`)
.then((response) => response.json())
.then((data) => {
    let currentdate = new Date()
    console.log(currentdate);
    let seconds = currentdate.getTime()
    let time = new Date(seconds-3600000+data.timezone*1000).toLocaleTimeString()
    let weatherIcon = `http://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let temp = Math.round(data.main.temp - 273.15) + "°"
    let windSpeed = data.wind.speed
    let clouds = data.weather[0].description
    let pressure = data.main.pressure + " hpa"
    let humitidy = data.main.humidity + " %"
    let sunrise = new Date(data.sys.sunrise).toLocaleTimeString()
    let sunset = new Date(data.sys.sunset).toLocaleTimeString()
    let coordyX = data.coord.lat
    let coordyY = data.coord.lon
    let city = data.name
    let country = data.sys.country

    console.log(data);
        let cityOutput = document.createElement('p')
        cityOutput.innerHTML = " " + city
        cityBox.appendChild(cityOutput)

        let countryOutput = document.createElement('p')
        countryOutput.textContent = country
        countryCodeBox.appendChild(countryOutput)

        let weatherIconOutput = document.createElement('img')
        weatherIconOutput.setAttribute("src", weatherIcon) 
        nebeneinanderBox.appendChild(weatherIconOutput)

        let tempOutput = document.createElement('p')
        tempOutput.textContent = temp
        nebeneinanderBox.appendChild(tempOutput)


        // let timeOutput = document.createElement('p')
        
        timeOutput.innerHTML = `<p>${time}</p>`
        timeBox.appendChild(timeOutput)

        let windOutput = document.createElement('p')
        windOutput.textContent = windSpeed
        windBox.appendChild(windOutput)

        let cloudsOutput = document.createElement('p')
        cloudsOutput.textContent = clouds
        cloudsBox.appendChild(cloudsOutput)

        let pressureOutput = document.createElement('p')
        pressureOutput.textContent = pressure
        pressureBox.appendChild(pressureOutput)

        let humitidyOutput = document.createElement('p')
        humitidyOutput.textContent = humitidy
        humitidyBox.appendChild(humitidyOutput)

        let sunriseOutput = document.createElement('p')
        sunriseOutput.textContent = sunrise
        sunriseBox.appendChild(sunriseOutput)

        let sunsetOutput = document.createElement('p')
        sunsetOutput.textContent = sunset
        sunsetBox.appendChild(sunsetOutput)

        let coordyXOutput = document.createElement('p')
        coordyXOutput.textContent = coordyX
        coordsBox.appendChild(coordyXOutput)

        let coordyYOutput = document.createElement('p')
        coordyYOutput.textContent = coordyY
        coordsBox.appendChild(coordyYOutput)

        


;
})

}