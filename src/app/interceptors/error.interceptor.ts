import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastController: ToastController, private router: Router, private loginService: LoginService) {}

  /**
   * Creates and displays the toast
   * @param msg Toast message
   */
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      icon: 'warning',
      color: 'danger'
    });

    await toast.present();
  }

  /**
   * Intercept http requests
   * @param request
   * @param next
   * @returns
   */
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    return next.handle(request).pipe(catchError(
      (error: HttpErrorResponse) => {
        if(error.status === 401) {
          this.router.navigate(['']);
        } else {
          this.presentToast(error.message);
          return throwError(error);
        }
      }
    ));
  }
}
