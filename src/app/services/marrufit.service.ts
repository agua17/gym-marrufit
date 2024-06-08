import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './models/user.model';

@Injectable({ providedIn: 'root' })
export class MarrufitService {
  constructor(private httpClient: HttpClient) {}
  private baseUrl: string = 'http://localhost:8080/api';

  getUsers(): Observable<Users[]> {
    return this.httpClient.get<Users[]>(`${this.baseUrl}/usuarios`);
  }
  saveUsers(user: Users): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/usuarios`, user);
  }
}
