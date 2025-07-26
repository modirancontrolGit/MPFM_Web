import { Component } from '@angular/core';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-live-gas',
  imports: [
    NzCheckboxModule,
    NzAlertModule,
    NzInputModule,
    NzRadioModule,
    NzButtonModule,
  ],
  templateUrl: './live-gas.component.html',
  styleUrl: './live-gas.component.scss',
})
export class LiveGasComponent {}
