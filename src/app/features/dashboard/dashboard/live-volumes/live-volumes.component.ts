import { Component } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'app-live-volumes',
  imports: [NzAlertModule, NzInputModule],
  templateUrl: './live-volumes.component.html',
  styleUrl: './live-volumes.component.scss',
})
export class LiveVolumesComponent {}
