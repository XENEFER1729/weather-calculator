const URL="https://api.openweathermap.org/data/2.5/weather?units=metric"
const api_key="ae2795a92cdc3c0b15a33834fcedbf49";
let city_name=document.querySelector("#city_name");
let city_text=document.getElementById("city_text");
let search_button=document.querySelector("#search_button");
let temp=document.querySelector("#temp");
let humidity_percentage=document.querySelector(".humidity_percentage");
let wind_speed_percentage=document.querySelector(".wind_speed_percentage");
let climate_image=document.getElementById("climate_image")


async function button(){
    search_button.addEventListener("click",()=>{
        async function checkapi(){
            let api=await fetch(URL+`&q=${city_text.value}`+`&appid=${api_key}`);
            let data=await api.json();
            city_name.innerHTML=data.name;
            temp.innerHTML=data.main["temp"];
            humidity_percentage.innerHTML=data.main["humidity"];
            wind_speed_percentage.innerHTML=data.wind["speed"];
            if(data.main["temp"]==0){
                climate_image.src="snowflake.png"
            }else if(data.main["temp"]>0 && data.main["temp"]<=10){
                climate_image.src="breath.png"
            }else if(data.main["temp"]>10 && data.main["temp"]<=20){
                climate_image.src="cloudy.png"
            }else if(data.main["temp"]>20 && data.main["temp"]<=25){
                climate_image.src="cloud(1).png"
            }else if(data.main["temp"]>25 && data.main["temp"]<=30){
                climate_image.src="sun.png"
            }else if(data.main["temp"]>30 && data.main["temp"]<=35){
                climate_image.src="sun(1).png"
            }else if(data.main["temp"]>35){
                climate_image.src="weather.png"
            }


        }
        checkapi()
    })
}




button();