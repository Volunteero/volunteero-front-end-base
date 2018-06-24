import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  chart: any;
  constructor() { }

  ngOnInit() {

    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ["John2796", "Good_Guy", "Helper123", "Alexandru Matei", "Ivan"],
        datasets: [
          {
            label: "Influence Points",
            backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 2000,
                }
          }],
          xAxes: [{
            ticks: {
              fontSize: 15
            }
          }]
        },
        legend: { display: false },
        title: {
          display: true,
          text: 'Top Volunteers 2018',
          fontSize: 20
        }
      }
    })
  }
}
