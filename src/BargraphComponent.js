import React, { useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from 'chart.js';
import { Bubble } from "react-chartjs-2";
import { Card, Grid, Paper } from "@mui/material";
Chart.register(...registerables);

function BargraphComponent(props){
     console.log("forecast")
    const forecastData=props.forecastData;
    const labels=[];
    const humidity=[];
    const wind_speed=[];
    const temperature=[];
    var current;
    console.log(forecastData.list.length);
    for(let i=0;i<forecastData.list.length;i++){
        console.log("inside for loop")
        current=forecastData.list[i];
        let date = current.dt_txt.split(' ')[0];
        var time=current.dt_txt.split(' ')[1];
        console.log(time);
        if(time==='12:00:00'){
            // console.log("iam here")
            // console.log(current.main.temp)
            labels.push(date);
            humidity.push(current.main.humidity);
            temperature.push((current.main.temp-273.15).toFixed(2))
            wind_speed.push(current.wind.speed)
        }
    }
    console.log(labels);
    console.log(humidity);
    console.log(temperature);
    console.log(wind_speed)

    const data = {
        labels: labels,
        datasets: [
          {
            queue: 'queue1',
            label: 'Temperature (\xB0C)',
            // 
            backgroundColor: '#FFC1BF',
            hoverBackgroundColor: '#F98783',
            borderColor: '#FB7671',
            hoverBorderColor: '#D73933',
            data: temperature
          },
          {
            queue: 'queue2',
            label: 'Humidity (%)',
            backgroundColor: '#AAE4FF',
            hoverBackgroundColor: '#62CDFF',
            borderColor: '#26ADEC',
            hoverBorderColor: '#1E86B6',
            data: humidity
          },
          {
            queue: 'queue3',
            label: 'Windspeed (m/s)',
            backgroundColor: '#FFFFAE',
            hoverBackgroundColor: '#FFFF6F',
            borderColor: '#D8D831',
            hoverBorderColor: '#D8D831',
            data: wind_speed
          }
        ]
      }    
    // useEffect(()=>{
    //     console.log("iam in bargraph")

    // },[])

return(
    <div>
        
        <Grid container style={{marginTop:'20px'}} >
        <Card
          style={{width:'500px',height:'300px' }}
        >
        <Bar
                data={data}
                width={120}
                height={70}
                options={{
                    maintainAspectRatio: true,
                    duration: 2000
                }}
                /> 
                </Card>
                <Card style={{width:'500px',height:'300px' }}>
                <Line data={data}/>
                </Card>
        {/* {console.log(forecastData)} */}
        {/* {JSON.stringify(forecastData)} */}
        {/* {drawgraph} */}
        </Grid>
    </div>
)
}
export default BargraphComponent;