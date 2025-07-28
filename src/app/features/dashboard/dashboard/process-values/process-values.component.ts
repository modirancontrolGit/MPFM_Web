import { Component } from '@angular/core';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzAlertModule } from 'ng-zorro-antd/alert';

@Component({
  selector: 'app-process-values',
  imports: [NzInputModule,NzAlertModule],
  templateUrl: './process-values.component.html',
  styleUrl: './process-values.component.scss'
})
export class ProcessValuesComponent {

}
