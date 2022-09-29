import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../services/login.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor( private loginService: LoginService) {};

    intercept( req: HttpRequest<any>, next: HttpHandler) {
        const token = this.loginService.getToken();
        console.log('entered interceptor: ', token);
        const authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + token)
        });
        console.log ('intercepts?' + token);
        return next.handle(authRequest);
    }
}
