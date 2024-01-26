document.addEventListener("DOMContentLoaded", ()=>{
    let cityname = document.getElementById("cityname")
    let submit = document.getElementById("submit")
    let info = document.getElementById("info")
    let degree = document.getElementById("degree")
    let wtr = document.getElementById("wtr")
    submit.addEventListener("click",()=>{
        let name = cityname.value
        if(name){
            getweather(name)
        }
        else{
            alert("Please enter the valid city name")
        }
    })
    async function getweather(name){
        let apiKey = "0135c0a7a5199009d87f7fcf4cd208b9";
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${apiKey}&units=metric`;
        try{
            let response = await fetch (apiUrl)
            console.log(response);
            let loc = await response.json()
            console.log(loc);
            if(loc.cod === 200){
                info.innerHTML = `Weather in ${loc.name}, ${loc.sys.country}`
                degree.innerHTML = `Temperature in ${loc.name} is ${loc.main.temp}deg`
                wtr.innerHTML = `The weather report in ${loc.name} are ${loc.weather[0].main}`
            }
        }
        catch{

        }
    }
})