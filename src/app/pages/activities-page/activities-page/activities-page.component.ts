import { Component } from '@angular/core';

@Component({
  selector: 'app-activities-page',
  templateUrl: './activities-page.component.html',
  styleUrls: ['./activities-page.component.scss'],
})
export class ActivitiesPageComponent {
  public sesion = [
    {
      title: 'ENTRENO PERSONAL',
      description:
        '¿No sabes entrenar solo? Este es tu servicio, ya que estarás acompañado en todo tu entramiento por un profesional que te ayudará y guiará en toda la sesión',
      price: '68€/mes',
    },
    {
      icon: 'path/to/icon1.png',
      title: 'Servicio 1',
      description: 'Descripción breve del servicio 1.',
      price: '$20/mes',
    },
    {
      icon: 'path/to/icon1.png',
      title: 'Servicio 1',
      description: 'Descripción breve del servicio 1.',
      price: '$20/mes',
    },
  ];
  item: any;
}
