import { Component, Input, OnInit } from '@angular/core';
import { clase } from '../interfaces/hours.interface';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  selectedClase: {
    nombre: string;
    icono: string;
    limite: number;
    inscritos: number;
  } | null = null;
  selectedHora: string | null = null;

  openModal(
    clase: { nombre: string; icono: string; limite: number; inscritos: number },
    hora: string
  ): void {
    this.selectedClase = clase;
    this.selectedHora = hora;
  }

  closeModal(): void {
    this.selectedClase = null;
    this.selectedHora = null;
  }
  @Input()
  public clase = [
    {
      hora: '7:30',
      lunes: {
        nombre: 'Bodytono',
        icono: 'fas fa-dumbbell',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Fitball',
        icono: 'fas fa-futbol',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Gap',
        icono: 'fas fa-heartbeat',
        limite: 20,
        inscritos: 0,
      },
      jueves: {
        nombre: 'Pilates',
        icono: 'fas fa-yoga',
        limite: 20,
        inscritos: 0,
      },
      viernes: {
        nombre: 'Woman eXtrem',
        icono: 'fas fa-female',
        limite: 20,
        inscritos: 0,
      },
    },
    {
      hora: '8:30',
      lunes: {
        nombre: 'Gap',
        icono: 'fas fa-heartbeat',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Streching',
        icono: 'fas fa-arrows-alt-h',
        limite: 20,
        inscritos: 0,
      },
      miercoles: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      jueves: {
        nombre: 'Bodytono',
        icono: 'fas fa-dumbbell',
        limite: 20,
        inscritos: 0,
      },
      viernes: {
        nombre: 'Fitball',
        icono: 'fas fa-futbol',
        limite: 20,
        inscritos: 0,
      },
    },
    {
      hora: '9:30',
      lunes: {
        nombre: 'Pilates',
        icono: 'fas fa-yoga',
        limite: 20,
        inscritos: 0,
      },
      martes: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      miercoles: {
        nombre: 'Streching',
        icono: 'fas fa-arrows-alt-h',
        limite: 20,
        inscritos: 0,
      },
      jueves: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      viernes: {
        nombre: 'Fitball',
        icono: 'fas fa-futbol',
        limite: 20,
        inscritos: 0,
      },
    },
    {
      hora: '10:15',
      lunes: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Pilates',
        icono: 'fas fa-yoga',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Woman eXtrem',
        icono: 'fas fa-female',
        limite: 20,
        inscritos: 0,
      },
      jueves: {
        nombre: 'Pilates',
        icono: 'fas fa-yoga',
        limite: 20,
        inscritos: 0,
      },
      viernes: { nombre: '', icono: '', limite: 0, inscritos: 0 },
    },
    {
      hora: '15:30',
      lunes: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Pilates',
        icono: 'fas fa-yoga',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      jueves: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      viernes: {
        nombre: 'Bodytono',
        icono: 'fas fa-dumbbell',
        limite: 20,
        inscritos: 0,
      },
    },
    {
      hora: '17:00',
      lunes: {
        nombre: 'Woman eXtrem',
        icono: 'fas fa-female',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Fitball',
        icono: 'fas fa-futbol',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Aerotono',
        icono: 'fas fa-wind',
        limite: 20,
        inscritos: 0,
      },
      jueves: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      viernes: { nombre: '', icono: '', limite: 0, inscritos: 0 },
    },
    {
      hora: '17:30',
      lunes: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Fitball',
        icono: 'fas fa-futbol',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Woman eXtrem',
        icono: 'fas fa-female',
        limite: 20,
        inscritos: 0,
      },
      jueves: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      viernes: {
        nombre: 'Bodytono',
        icono: 'fas fa-dumbbell',
        limite: 20,
        inscritos: 0,
      },
    },
    {
      hora: '18:00',
      lunes: {
        nombre: 'Fitball',
        icono: 'fas fa-futbol',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Pilates',
        icono: 'fas fa-yoga',
        limite: 20,
        inscritos: 0,
      },
      jueves: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      viernes: {
        nombre: 'Bodytono',
        icono: 'fas fa-dumbbell',
        limite: 20,
        inscritos: 0,
      },
    },
    {
      hora: '19:15',
      lunes: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      martes: {
        nombre: 'HathaYoga',
        icono: 'fas fa-spa',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Zumba',
        icono: 'fas fa-music',
        limite: 20,
        inscritos: 0,
      },
      jueves: { nombre: '', icono: '', limite: 0, inscritos: 0 },
      viernes: { nombre: '', icono: '', limite: 0, inscritos: 0 },
    },
    {
      hora: '20:00',
      lunes: {
        nombre: 'Aerotono',
        icono: 'fas fa-wind',
        limite: 20,
        inscritos: 0,
      },
      martes: {
        nombre: 'Gap',
        icono: 'fas fa-heartbeat',
        limite: 20,
        inscritos: 0,
      },
      miercoles: {
        nombre: 'Bodytono',
        icono: 'fas fa-dumbbell',
        limite: 20,
        inscritos: 0,
      },
      jueves: {
        nombre: 'HathaYoga',
        icono: 'fas fa-spa',
        limite: 20,
        inscritos: 0,
      },
      viernes: { nombre: '', icono: '', limite: 0, inscritos: 0 },
    },
  ];
}
