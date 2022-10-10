import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { ToastService } from '../services/toast.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastService: ToastService, private loginService: LoginService) {}

  /**
   * Intercept http requests
   *
   * @param request
   * @param next
   * @returns
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log('entradadas');
    return next.handle(request).pipe(catchError(
      (error: HttpErrorResponse) => {
        console.log(error, 'entra');
        this.toastService.presentToast(error.error.message ? error.error.message: 'unknown error', 'danger', 'warning');
        if(error.status === 401) {
          this.loginService.logoutUser();
        }
        return throwError(error);
      }
    ));
  }
}
