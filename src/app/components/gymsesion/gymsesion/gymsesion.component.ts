import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-gymsesion',
  templateUrl: './gymsesion.component.html',
  styleUrls: ['./gymsesion.component.scss'],
})
export class GymsesionComponent {
  @Input() icon!: string;
  @Input() title!: string;
  @Input() description!: string;
  @Input() tariff!: string;
}
