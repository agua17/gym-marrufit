import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Users } from './models/user.model';
import { Service } from './models/service.model';
import { Horario } from './models/horario.model';

@Injectable({ providedIn: 'root' })
export class MarrufitService {
  constructor(private httpClient: HttpClient) {}

  public currentUser = new BehaviorSubject<Users>({
    id: 0,
    usuario: '',
    nombre: '',
    password: '',
    email: '',
    telefono: '',
    servicioId: 0,
    horarios: [],
  });

  private baseUrl: string = 'http://localhost:8080/api';

  // Consultas de usuario
  saveUsers(user: Users): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/usuarios`, user);
  }

  login(usuario: string, password: string) {
    return this.httpClient.get<Users>(
      `${this.baseUrl}/usuarios/login/${usuario}/${password}`
    );
  }

  actualizarUsuario(usuarioId: number, user: Users): Observable<Users> {
    return this.httpClient.put<Users>(
      `${this.baseUrl}/usuarios/${usuarioId}`,
      user
    );
  }

  // Consulta de servicios
  getAllService() {
    return this.httpClient.get<Service[]>(`${this.baseUrl}/servicios`);
  }

  getService(idServicio: number) {
    return this.httpClient.get<Service>(
      `${this.baseUrl}/servicios/${idServicio}`
    );
  }

  // Consulta de horarios
  getHorariosServicio(servicioId: number) {
    return this.httpClient.get<Horario[]>(
      `${this.baseUrl}/horarios/servicios/${servicioId}`
    );
  }

  relacionarUsuarioHorario(idHorario: number, idUsuario: number) {
    return this.httpClient.put<any>(
      `${this.baseUrl}/horarios/${idHorario}/usuarios/${idUsuario}`,
      {}
    );
  }
}
