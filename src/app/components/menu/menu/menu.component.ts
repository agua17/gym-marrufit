import { Component } from '@angular/core';
import { MarrufitService } from '../../../services/marrufit.service';
import { Users } from '../../../services/models/user.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  showNavBar: boolean = true;

  usuario = {} as Users;

  constructor(private marrufitService: MarrufitService) {
    this.marrufitService.currentUser.subscribe({
      next: (usuario) => (this.usuario = usuario),
    });
  }

  logout() {
    this.marrufitService.currentUser.next({
      id: 0,
      usuario: '',
      nombre: '',
      password: '',
      email: '',
      telefono: '',
      servicioId: 0,
      horarios: [],
    });
  }
}
