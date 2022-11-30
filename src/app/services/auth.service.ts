import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Credenciais } from '../models/credenciais';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Token } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  // capturar as credenciais
  public authenticate(credenciais: Credenciais): Observable<Token> {

    // requisitar o token de autorização

    const url = "http://localhost:8080";

    return this.http.post<Token>(`${baseUrl}/auth/login`, credenciais).pipe(
      tap(token => {
        localStorage.setItem("token", token.accessToken);
      })
    );
   
    // autenticar


  }
}
