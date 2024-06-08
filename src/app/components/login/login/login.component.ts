import { Component } from '@angular/core';
import { MarrufitService } from '../../../services/marrufit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showNavBar: boolean = true;

  usuario: string = '';
  password: string = '';

  constructor(
    private marrufitService: MarrufitService,
    private router: Router
  ) {}

  login() {
    this.marrufitService.login(this.usuario, this.password).subscribe(
      (response) => {
        console.log('Login correcto', response);
        this.marrufitService.currentUser.subscribe({
          next: (usuario) => console.log('Usuario logueado: ' + usuario.nombre),
        });

        this.marrufitService.currentUser.next(response);

        this.router.navigate(['/']);
      },
      (error) => {
        console.log('Error guardando el usuario', error);
      }
    );
  }
}
