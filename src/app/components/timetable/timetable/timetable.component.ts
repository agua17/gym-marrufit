import { Component, Input, OnInit } from '@angular/core';
import { MarrufitService } from '../../../services/marrufit.service';
import { Router } from '@angular/router';
import { Service } from '../../../services/models/service.model';
import { Horario } from '../../../services/models/horario.model';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent implements OnInit {
  services: Service[] = [];
  horarios: Horario[] = [];
  servicioSeleccionado = 0;

  hours: string[] = [
    '06:00',
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
  ];

  days: string[] = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  horariosRegistrados: number[] = [];

  constructor(
    private marrufitService: MarrufitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.marrufitService.getAllService().subscribe((response) => {
      this.services = response;
    });

    this.horariosRegistrados =
      this.marrufitService.currentUser.value.horarios.map((h: Horario) => h.id);
  }

  cargarHorarioServicio() {
    console.log(this.servicioSeleccionado);
    this.marrufitService
      .getHorariosServicio(this.servicioSeleccionado)
      .subscribe(
        (response) => {
          console.log('Se obtienen los horarios para el servicio', response);
          this.horarios = response;
        },
        (error) => {}
      );
  }

  registrarUsuarioHorario(idHorario: number) {
    this.marrufitService
      .relacionarUsuarioHorario(
        idHorario,
        this.marrufitService.currentUser.value.id
      )
      .subscribe(
        (response) => {
          console.log(
            'Se ha registrado el usuario en el horario',
            response.horarios
          );
          this.marrufitService.currentUser.next(response);
          this.horariosRegistrados = response.horarios.map(
            (h: Horario) => h.id
          );
        },
        (error) => console.log('Error en el registro de la clase')
      );
  }
}
