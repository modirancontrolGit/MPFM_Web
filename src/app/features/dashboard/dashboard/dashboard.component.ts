import { Component } from '@angular/core';
import { LiveFlowRatesComponent } from './live-flow-rates/live-flow-rates.component';
import { LiveGasComponent } from './live-gas/live-gas.component';
import { LiveVolumesComponent } from './live-volumes/live-volumes.component';
import { PlotOptionsComponent } from './plot-options/plot-options.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    LiveFlowRatesComponent,
    LiveVolumesComponent,
    LiveGasComponent,
    PlotOptionsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
