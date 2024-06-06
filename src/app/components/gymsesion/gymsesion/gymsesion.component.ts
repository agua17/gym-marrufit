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
      icon: "''",
      title: 'ENTRENO PERSONAL',
      description:
        '¿No sabes entrenar solo? Este es tu servicio, ya que estarás acompañado en todo tu entramiento por un profesional que te ayudará y guiará en toda la sesión',
      price: '68€/mes',
    },
    {
      icon: "''",
      title: 'ENTRENO PERSONAL',
      description:
        '¿No sabes entrenar solo? Este es tu servicio, ya que estarás acompañado en todo tu entramiento por un profesional que te ayudará y guiará en toda la sesión',
      price: '68€/mes',
    },
    {
      icon: "''",
      title: 'ENTRENO PERSONAL',
      description:
        '¿No sabes entrenar solo? Este es tu servicio, ya que estarás acompañado en todo tu entramiento por un profesional que te ayudará y guiará en toda la sesión',
      price: '68€/mes',
    },
  ];

  ngOnInit(): void {}
  selectedCard: any;

  selectCard(item: any) {
    this.selectedCard = item;
    console.log('Tarjeta seleccionada:', item);
  }
}
