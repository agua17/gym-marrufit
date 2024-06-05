import { sesion } from './../interfaces/gymsesion.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gymsesion',
  templateUrl: './gymsesion.component.html',
  styleUrls: ['./gymsesion.component.scss'],
})
export class GymsesionComponent implements OnInit {
  @Input()
  public item!: sesion;

  ngOnInit(): void {}
}
