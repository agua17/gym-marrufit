import { Horario } from './horario.model';

export interface Users {
  id: number;
  nombre: string;
  usuario: string;
  password: string;
  email: string;
  telefono: string;
  servicioId: number;
  horarios: Horario[];
}
