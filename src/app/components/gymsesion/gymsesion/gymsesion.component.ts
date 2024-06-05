import { sesion } from './../interfaces/gymsesion.interface';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-gymsesion',
  templateUrl: './gymsesion.component.html',
  styleUrls: ['./gymsesion.component.scss'],
})
export class GymsesionComponent implements OnInit {
  @Input()
  public sesion = [
    {
      title: 'ENTRENO PERSONAL',
      icon: "''",
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

  ngOnInit(): void {}
}
