import backgroundImg from "./assets/fondo.jpeg";
import imgs from "./assets/search.png";
import HumidityImg from "./assets/Humidity.png";
import windImgs from "./assets/wind.png";
import rain from "./assets/rain.png"
import clear from "./assets/clear.png"
import weather from "./weatherInfo.js"; 

export function setBackground() {
  document.body.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg})`;
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  document.body.style.height = "100vh";

  createSearchIcon();

}






function createSearchIcon(i){
  const searchImg = document.getElementById("searchBtn");
  const imagen = document.createElement("img");

  imagen.src = `${imgs}`;
  imagen.id = "searchImg";
  searchImg.appendChild(imagen);

}

function createDivs(){
    const principal = document.getElementById("main");
    principal.innerHTML = ""; 

    const bigImgDiv = document.createElement("div");
    bigImgDiv.id = "bigImgDiv";
    principal.appendChild(bigImgDiv);


    const temperatureDiv=document.createElement("div")
    temperatureDiv.id = "temperatureDiv"
    principal.appendChild(temperatureDiv)

    const moreInfo= document.createElement("div")
    moreInfo.id="moreInfo"
    principal.appendChild(moreInfo)

    const moreInfoDiv= document.getElementById("moreInfo")

    const Humidity=document.createElement("div")
    Humidity.id="Humidity"
    moreInfoDiv.appendChild(Humidity)

    const HumidityInfo=document.createElement("div")
    HumidityInfo.id="HumidityInfo"
    moreInfoDiv.appendChild(HumidityInfo)

    

    
    const wind=document.createElement("div")
    wind.id="wind"
    moreInfoDiv.appendChild(wind)


    const windInfo=document.createElement("div")
    windInfo.id="windInfo"
    wind.appendChild(windInfo)
}

function createImg(iconInfo){
  const bigDivImg = document.getElementById("bigImgDiv");
  bigDivImg.innerHTML = ""; // Limpiar el contenedor antes de agregar una nueva imagen
  console.log(iconInfo)
  const bigImg = document.createElement("img");
  
  switch (iconInfo) {
    case "rain":
      bigImg.src =`${rain}`
      bigImg.id = "bigImg";
      bigDivImg.appendChild(bigImg);
      break;
    case "clear-day":
      bigImg.src =`${clear}`
      bigImg.id = "bigImg";
      bigDivImg.appendChild(bigImg);
      break;
    default:
      console.error("Icono no reconocido.");
      return;
    }
  

}

function Temperature(){
    const tempDiv= document.createElement("div");
    const temperatureDiv= document.getElementById("temperatureDiv")
    tempDiv.id= "temperature";
    temperatureDiv.appendChild(tempDiv)
}

function place(){

    const placeDiv= document.createElement("div");
    const place= document.getElementById("temperatureDiv")
    placeDiv.id= "place";
    place.appendChild(placeDiv)
}





function createMoreInfo() {
  const Humidity = document.getElementById("Humidity");
  const wind = document.getElementById("wind");

  const imagenHumidity = document.createElement("img");
  const windImg = document.createElement("img");

  imagenHumidity.className = "imgInfo";
  windImg.className = "imgInfo";
  imagenHumidity.src=`${HumidityImg}`
  windImg.src=`${windImgs}`


  Humidity.appendChild(imagenHumidity);
  wind.appendChild(windImg);
}

function updateWeatherInfo({ addressInfo, tempInfo, humidityInfo, windspeedInfo }) {
 const  addressInfoMayus= addressInfo.toUpperCase()
  document.getElementById("place").innerText = `${addressInfoMayus}`;
  document.getElementById("temperature").innerText = `${tempInfo}°C`;
  document.getElementById("HumidityInfo").innerText = `${humidityInfo}%`;
  document.getElementById("windInfo").innerText = `${windspeedInfo} km/h`;

}

document.getElementById("searchBtn").addEventListener("click",async()=>{
  const weatherData = await weather();
  const search = document.getElementById("searchInput")
  search.value=""
 if(weatherData){    
    createDivs();
  Temperature();
  place();
  createMoreInfo();
  createImg(weatherData.iconInfo);
  updateWeatherInfo(weatherData);
 }

});




setBackground();
