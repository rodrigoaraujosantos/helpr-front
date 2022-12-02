import { HttpClient } from '@angular/common/http';
import { EmptyExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  public findAll(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}/clientes`).pipe(
      catchError(error => {
        alert("Erro ao buscar dados de clientes");
        console.error(error);
        return EMPTY;
      })
    );
  }
}
