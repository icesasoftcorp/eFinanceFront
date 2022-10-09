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

  constructor(private toastService: ToastService, private router: Router, private loginService: LoginService) {}

  /**
   * Intercept http requests
   *
   * @param request
   * @param next
   * @returns
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(catchError(
      (error: HttpErrorResponse) => {
        if(error.status === 401) {
          this.loginService.logoutUser();
        }
        this.toastService.presentToast(error.message, 'danger', 'warning');
        return throwError(error);
      }
    ));
  }
}
