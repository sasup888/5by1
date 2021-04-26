import { Component, ViewEncapsulation } from '@angular/core';
import { ColorHelper } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})
export class PieChartComponent {

  data = [
    {
      name: 'Sales',
      value: 8940000
    },
    {
      name: 'Deposit',
      value: 5000000
    }
  ];

  colorScheme = {
    domain: ['#F2F7FF', '#0062FF']
  };

  legendNames = this.data.map(d => d.name);
  legendColors = new ColorHelper(this.colorScheme, 'ordinal', this.legendNames, this.colorScheme);

}
