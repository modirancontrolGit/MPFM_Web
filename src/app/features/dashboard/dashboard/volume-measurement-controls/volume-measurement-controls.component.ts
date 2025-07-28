import { Component } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
@Component({
  selector: 'app-volume-measurement-controls',
  imports: [NzAlertModule, NzButtonModule],
  templateUrl: './volume-measurement-controls.component.html',
  styleUrl: './volume-measurement-controls.component.scss',
})
export class VolumeMeasurementControlsComponent {}
