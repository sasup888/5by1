import { Component } from '@angular/core';

const data = [
  {
    "name": "Income",
    "series": [
      {
        "name": "Jan",
        "value": 0
      },
      {
        "name": "Feb",
        "value": 5000
      },
      {
        "name": "Mar",
        "value": 0
      },
      {
        "name": "Apr",
        "value": 0
      },
      {
        "name": "May",
        "value": 0
      },
      {
        "name": "Jun",
        "value": 0
      }
    ]
  },
  {
    "name": "Expenses",
    "series": [
      {
        "name": "Jan",
        "value": 0
      },
      {
        "name": "Feb",
        "value": 2500
      },
      {
        "name": "Mar",
        "value": 0
      },
      {
        "name": "Apr",
        "value": 0
      },
      {
        "name": "May",
        "value": 0
      },
      {
        "name": "Jun",
        "value": 0
      }
    ]
  },

  {
    "name": "Profit",
    "series": [
      {
        "name": "Jan",
        "value": 0
      },
      {
        "name": "Feb",
        "value": 1000
      },
      {
        "name": "Mar",
        "value": 0
      },
      {
        "name": "Apr",
        "value": 0
      },
      {
        "name": "May",
        "value": 0
      },
      {
        "name": "Jun",
        "value": 0
      }
    ]
  }
];

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent {

  data = data;
  view: number[] = [undefined, 250];

  // options
  showLabels: boolean = false;

  colorScheme = {
    domain: ['#1E3354', '#0062FF', '#CFDFFE']
  };
}
