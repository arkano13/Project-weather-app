async function weather() {
    const searchInput = document.getElementById("searchInput");
  
    const placeSearch = searchInput.value;
    
    if (!placeSearch) {
      console.log("vete alv");
    }
  
    try {
      const apiKey = "Q8NNEUBXGUX3BAZ6JG2RHDWRY";
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${placeSearch}?unitGroup=metric&include=days&key=${apiKey}&contentType=json`;
      const res = await fetch(url, { mode: "cors" });
      const weather = await res.json();
      console.log(weather)
  
      const { address, days } = weather;
    
      const {
        temp,
        humidity,
        windspeed,
        icon

      } = days[0];



        return {
            addressInfo: address,
            tempInfo: temp,
            humidityInfo: humidity,
            windspeedInfo: windspeed,
            iconInfo:icon
        };
  
    } catch (error) {
      console.log("error", error);
    }
  }
  

  export default weather;
  
      
  
  
  
