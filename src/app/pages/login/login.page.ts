import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthData } from 'src/app/models/auth-data';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  /**
   *
   * Logins user throught Auth Service
   *
   * @param ngForm
   * @returns
   */
   onLogin(ngForm: NgForm) {
    if (ngForm.invalid) {
      return;
    }
    const authData: AuthData = {
      email: ngForm.value.email,
      password: ngForm.value.password,
    };
    this.loginService.loginUser(authData);
  }
}
