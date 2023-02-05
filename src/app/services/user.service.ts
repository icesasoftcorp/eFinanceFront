import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { ToastService } from './toast.service';

const BACKEND_URL =  environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient, private router: Router, private toastService: ToastService) { }

  createUser(email: string, name: string, lastname: string, password: string) {
    const user: User = {
      email: email,
      name: name,
      lastname: lastname,
      password: password,
    };
    this.httpClient.post(BACKEND_URL + "/signup", user).subscribe(response => {
      this.router.navigate(['/login']);
      // this.toastService.presentToast('User Succesfully created' , 'success', 'person')
    }, error => {
      console.error (error);
    });
  }
}
