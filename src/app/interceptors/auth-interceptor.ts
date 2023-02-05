import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor( private loginService: LoginService) {};

    intercept( req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.loginService.getToken();
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        return next.handle(authRequest);
    }
}

export const authInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ];