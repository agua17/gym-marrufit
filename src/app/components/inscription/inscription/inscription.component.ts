import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss'],
})
export class InscriptionComponent {
  @Input() clase: {
    nombre: string;
    icono: string;
    limite: number;
    inscritos: number;
  } | null = null;
  @Input() hora: string | null = null;
  @Output() close = new EventEmitter<void>();

  inscribirSocio(): void {
    if (this.clase && this.clase.inscritos < this.clase.limite) {
      this.clase.inscritos++;
      alert('Inscripción exitosa!');
    } else {
      alert('No hay cupos disponibles.');
    }
  }

  cerrarModal(): void {
    this.close.emit();
  }
}
