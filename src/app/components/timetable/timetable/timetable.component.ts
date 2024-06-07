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
  @Input()
  public clase = [
    {
      hora: '7:30',
      lunes: 'Bodytono',
      martes: 'Fitball',
      miercoles: 'Gap',
      jueves: 'Pilates',
      viernes: 'Woman eXtrem',
    },
    {
      hora: '8:30',
      lunes: 'Gap',
      martes: 'Streching',
      miercoles: '',
      jueves: 'Bodytono',
      viernes: 'Fitball',
    },
    {
      hora: '9:30',
      lunes: 'Pilates',
      martes: '',
      miercoles: 'Streching',
      jueves: '',
      viernes: 'Fitball',
    },
  ];
}
