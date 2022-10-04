import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }

  /**
   * Creates and displays the toast
   *
   * @param msg Toast message
   */
   async presentToast(msg: string, color: string, icon: string = '') {
    const toast = await this.toastController.create({
      message: msg,
      duration: 1500,
      icon: icon,
      color: color
    });
    await toast.present();
  }
}
