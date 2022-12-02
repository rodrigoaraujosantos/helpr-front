import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  //intercepta as requisições e insere o token de autorização
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //pegar toker
    const token = localStorage.getItem("token");
    if(token){
      const cloneRequest = request.clone({
        headers: request.headers.set("Authorization", `Bearer ${token}`)
      });
      return next.handle(cloneRequest);
    }else{
      //caso eu nao tenha token ele nao vai afetar a requisição, somento continuar ela
      return next.handle(request)
    }
  }
}
