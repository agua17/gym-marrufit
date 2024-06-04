import { Component } from '@angular/core';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss'],
})
export class ActivitiesPageComponent {
  services = [
    {
      icon: 'path/to/icon1.png',
      title: 'Servicio 1',
      description: 'Descripción breve del servicio 1.',
      tariff: '$20/mes',
    },
    {
      icon: 'path/to/icon2.png',
      title: 'Servicio 2',
      description: 'Descripción breve del servicio 2.',
      tariff: '$30/mes',
    },
    {
      icon: 'path/to/icon3.png',
      title: 'Servicio 3',
      description: 'Descripción breve del servicio 3.',
      tariff: '$40/mes',
    },
  ];
}
