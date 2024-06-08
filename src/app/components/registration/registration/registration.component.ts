import { Component } from '@angular/core';
import { MarrufitService } from '../../../services/marrufit.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent {
  showNavBar: boolean = true;
  constructor(private marrufitService: MarrufitService) {}
}
