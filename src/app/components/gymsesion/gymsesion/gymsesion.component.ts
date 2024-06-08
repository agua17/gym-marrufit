import { Router } from '@angular/router';
import { MarrufitService } from '../../../services/marrufit.service';
import { Service } from '../../../services/models/service.model';
import { sesion } from './../interfaces/gymsesion.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Users } from '../../../services/models/user.model';
@Component({
  selector: 'app-gymsesion',
  templateUrl: './gymsesion.component.html',
  styleUrls: ['./gymsesion.component.scss'],
})
export class GymsesionComponent implements OnInit {
  public services: Service[] = [];

  constructor(
    private marrufitService: MarrufitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.marrufitService.getAllService().subscribe(
      (response) => {
        this.services = response;
      },
      (error) => {
        console.log('Error al obtener lo servicios');
      }
    );

    this.selectedCard = this.marrufitService.currentUser.value.servicioId;
  }
  selectedCard: any;

  selectCard(item: any) {
    this.selectedCard = item;
    console.log('Tarjeta seleccionada:', item);
  }

  seleccionarServicio(servicioId: number) {
    let usuario: Users = this.marrufitService.currentUser.value;
    usuario.servicioId = servicioId;
    this.marrufitService.actualizarUsuario(usuario.id, usuario).subscribe(
      (response) => {
        this.marrufitService.currentUser.next(usuario);
        console.log(this.marrufitService.currentUser.value);
      },
      (error) => {
        console.log('Se ha producido un error');
      }
    );
  }
}
