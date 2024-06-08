import { Component } from '@angular/core';
import { MarrufitService } from '../../../services/marrufit.service';
import { Users } from '../../../services/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  showNavBar: boolean = true;
  public user = {} as Users;
  constructor(
    private marrufitService: MarrufitService,
    private router: Router
  ) {}

  saveUser() {
    this.marrufitService.saveUsers(this.user).subscribe(
      (response) => {
        console.log('Usuario registrado', response);
        this.router.navigate(['/'], {
          queryParams: { idUsuario: response.id },
        });
      },
      (error) => {
        console.log('Error guardando el usuario', error);
      }
    );
  }
}
