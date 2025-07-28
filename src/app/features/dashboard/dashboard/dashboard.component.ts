import { Component } from '@angular/core';
import { LiveFlowRatesComponent } from './live-flow-rates/live-flow-rates.component';
import { LiveGasComponent } from './live-gas/live-gas.component';
import { LiveVolumesComponent } from './live-volumes/live-volumes.component';
import { PlotOptionsComponent } from './plot-options/plot-options.component';
import { StdChartComponent } from './std-chart/std-chart.component';
import { GorChartComponent } from './gor-chart/gor-chart.component';
import { trigger, transition, style, animate } from '@angular/animations';
import { VolumeMeasurementControlsComponent } from './volume-measurement-controls/volume-measurement-controls.component';
import { ProcessValuesComponent } from './process-values/process-values.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    LiveFlowRatesComponent,
    LiveVolumesComponent,
    LiveGasComponent,
    PlotOptionsComponent,
    StdChartComponent,
    GorChartComponent,
    VolumeMeasurementControlsComponent,
    ProcessValuesComponent
  ],
  animations: [
    trigger('fadeResize', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.95)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'scale(0.95)' })
        ),
      ]),
    ]),
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
