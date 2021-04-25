import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PieChartComponent {

  data = [
    {
      "name": "Sales",
      "value": 8940000
    },
    {
      "name": "Deposit",
      "value": 5000000
    }
  ];

  view = [undefined, 180];

  colorScheme = {
    domain: ['#F2F7FF', '#0062FF']
  };

}
