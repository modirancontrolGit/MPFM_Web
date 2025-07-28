import { Component } from '@angular/core';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzInputModule } from 'ng-zorro-antd/input';
@Component({
  selector: 'app-plot-options',
  imports: [
    NzAlertModule,
    NzSelectModule,
    NzButtonModule,
    NzRadioModule,
    NzInputModule,
  ],
  templateUrl: './plot-options.component.html',
  styleUrl: './plot-options.component.scss',
})
export class PlotOptionsComponent {}
