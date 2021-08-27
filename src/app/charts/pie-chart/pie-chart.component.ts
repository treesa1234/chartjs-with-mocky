import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { WeatherService } from 'src/app/layout/weather.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {

  chart = [];

  constructor(private _weather: WeatherService) { }

  ngOnInit() {
    this._weather.dailyForecast().subscribe(res => {
      let labels = res['labels'];
      let values = res['values'];
      // let temp_max = res['list'].map((res: { main: { temp_max: any; }; }) => res.main.temp_max);
      // let temp_min = res['list'].map((res: { main: { temp_min: any; }; }) => res.main.temp_min);
      // let alldates = res['list'].map((res: { dt: any; }) => res.dt);
      
      // let weatherDates: string[] = []
      // alldates.forEach((res: number) => {
      //   let jsdate = new Date(res * 1000)
      //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        
      // })
      
      var ctx = document.getElementById('pieChart') as HTMLCanvasElement;
      var pieChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [
            {  
              data: values,
              backgroundColor: ["red","yellow","black","blue"],
              // backgroundColor: "red",
              // borderColor: "red",
              fill: false
            },
            // { 
            //   data: temp_min,
            //   backgroundColor: "blue",
            //   borderColor: "blue",
            //   fill: false
            // },
          ]
        },
        options: {
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true, 
              ticks: {
                beginAtZero: true
            }
            }],
          }, 
          animation: {
            // easing: "easeInSine", 
            duration: 1000
          }
        }
      });
      
    })
  }
}

