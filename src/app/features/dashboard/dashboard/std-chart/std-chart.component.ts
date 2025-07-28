import { Component, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  NgxApexchartsModule,
} from 'ngx-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-std-chart',
  standalone: true,
  imports: [NgxApexchartsModule],
  templateUrl: './std-chart.component.html',
  styleUrl: './std-chart.component.scss',
})
export class StdChartComponent {
  @ViewChild('chart') chart: ChartComponent | undefined;

  public chartOptions: ChartOptions;

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: 'Desktops',
          data: [10, 4100, 35, 4100, 49, 4100, 69, 4100, 148],
        },
      ],
      chart: {
        height: 150,
        width: '100%',
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 2,
        curve: 'straight',
        colors: ['#006327'],
      },
      title: {
        text: 'STD Flow Rates (STB/D)',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: [
          '7:00',
          '8:00',
          '9:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
        ],
      },
    };
  }
}
