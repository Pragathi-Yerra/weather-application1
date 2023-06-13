import React from "react";
import { Typography,CardMedia,CardContent, Grid } from "@mui/material";
import { Card } from "@mui/material";
import { CardActionArea } from "@mui/material";
import axios from "axios";
import { Button } from "@mui/material";
import { useState } from "react";
import BargraphComponent from "./BargraphComponent";
function CurrentWeatherCard(props){
  const apiKey="24358346c2f47775d410fbcf24d99d8c";
    const weatherData=props.weatherData;
    const temp=(weatherData.main.temp-273.15).toFixed(2);
    const description=weatherData.weather[0].description;
    const humidity=weatherData.main.humidity;
    const cityName=props.cityName;
    const [forecastData,setForecastData] = useState([]);
    const forecastWeather=async()=>{
      // const url=`https://api.openweathermap.org/data/2.5/forecast/climate?q=${cityName}&cnt=3`;
  //    const url="http://api.openweathermap.org/data/2.5/forecast/climate?q=London&units=metric";
  //const cnt=3;
    //const url=`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=${cnt}&appid=${apiKey}`;
 const url=`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}` 
      await axios.get(url)
      .then((res)=>{
          console.log("response",res.data)
          setForecastData(res.data);
      });
      // <BargraphComponent forecastData={forecastData}/>
  }
    return(
      
           <div>
            <Grid container justify="center" alignItems="center" direction="column">
                <Grid item>
            <Card 
             style={{width:'500px',height:'300px' }}
            sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={require('./OIP.jpg')}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
              {cityName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica */}
            {/* {description} */}
          </Typography>
          <Typography>
             Description: {description}
          </Typography>
          <Typography>
            Temperature: {temp}°C 
          </Typography>
          <Typography>
              Humidity: {humidity}
          </Typography>
          <Button variant="contained"
            style={{marginBottom:'50px',width:'14rem'}}
            onClick={forecastWeather}
            >Forecast Weather</Button>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
    </Grid>
    {Object.keys(forecastData).length>0 && 
    <BargraphComponent forecastData={forecastData}/>
    
    }
     {/* {JSON.stringify(props.weatherData)} */}
     {/* {props.weatherData} */}
    </div>
    )

}
export default CurrentWeatherCard;