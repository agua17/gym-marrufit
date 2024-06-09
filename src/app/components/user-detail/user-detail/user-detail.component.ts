import { Users } from './../../../services/models/user.model';
import { Component, OnInit } from '@angular/core';
import { MarrufitService } from '../../../services/marrufit.service';
import { Service } from '../../../services/models/service.model';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  usuario = {} as Users;
  servicio = {} as Service;

  constructor(private marrufitService: MarrufitService) {}

  ngOnInit(): void {
    this.usuario = this.marrufitService.currentUser.value;
    this.marrufitService.getService(this.usuario.servicioId).subscribe(
      (response) => (this.servicio = response),
      (error) => console.log('No se ha podido recuperar el servicio')
    );
  }
}
