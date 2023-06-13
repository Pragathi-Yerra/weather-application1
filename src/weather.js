import React, { useState ,useEffect} from "react";
import axios from "axios";
import { TextField, Typography,Button, Card, Paper} from "@mui/material";
import CurrentWeatherCard from "./currentweathercard";
import BargraphComponent from "./BargraphComponent";
function Weather(){
    const apiKey="24358346c2f47775d410fbcf24d99d8c";
    const [weatherData,setWeatherData]=useState({});
    const [cityName,setCityName]=useState("");
    const [buttonStatus,setButtonStatus]=useState(false);
    const [countryName,setCountryName] = useState("");
    const [forecastData,setForecastData] = useState([]);
    const senddata=()=>{
        console.log(weatherData);
    }
    const getCurrentWeather= async() => {
        console.log("inside func");
        console.log(cityName);
        if(!cityName) return
        const apiURL = "https://api.openweathermap.org/data/2.5/weather?q="+cityName+"&appid="+apiKey
        await axios.get(apiURL)
        .then((res)=>{
            console.log("response",res.data)
            // console.log(temp);
          setWeatherData(res.data);
          setButtonStatus(true);
        //   <CurrentWeatherCard weatherData={weatherData}/>
        })
        .catch((err)=>{
            console.log("err",err);
        });
      //  console.log(weatherData);
        // senddata();
    }

//     const forecastWeather=async()=>{
//         // const url=`https://api.openweathermap.org/data/2.5/forecast/climate?q=${cityName}&cnt=3`;
//     //    const url="http://api.openweathermap.org/data/2.5/forecast/climate?q=London&units=metric";
//     //const cnt=3;
//       //const url=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=${cnt}&appid=${apiKey}`;
//    const url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}` 
//         await axios.get(url)
//         .then((res)=>{
//             console.log("response",res.data)
//             setForecastData(res.data);
//         })
//     }
    return(
        <div>
            <Typography variant="h5" style={{marginBottom:'30px',marginTop:'10px'}}>Weather App</Typography>
            <TextField style={{marginBottom:'20px'}}
            id="outlined-basic" label="City Name" variant="outlined" value={cityName} onChange={(event)=>{
                setCityName(event.target.value)
            }} /><br/>
             <TextField style={{marginBottom:'20px'}}
            id="outlined-basic" label="Country" variant="outlined" value={countryName} onChange={(event)=>{
                setCountryName(event.target.value)
            }} /><br/>
            
            <Button variant="contained"
            style={{marginBottom:'50px',width:'14rem'}}
            onClick={getCurrentWeather}
            >Present Weather</Button>
            {/* <Button variant="contained"
            style={{marginBottom:'50px',width:'14rem'}}
            onClick={forecastWeather}
            >Forecast Weather</Button> */}
            {Object.keys(weatherData).length >0 && buttonStatus===true &&
             <CurrentWeatherCard weatherData={weatherData} cityName={cityName}/>
            }
            {/* {Object.keys(forecastData).length>0 &&
            <Card  sx={{ maxWidth: 345 }}>
            <BargraphComponent forecastData={forecastData}/>
            </Card>
            } */}

            {/* {JSON.stringify(weatherData)} */}
        </div>
    )
}
export default Weather;