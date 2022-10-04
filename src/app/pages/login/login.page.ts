import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthData } from 'src/app/models/auth-data';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (this.loginService.getToken() !== null && this.loginService.getToken() !== '') {
      this.router.navigate(['app']);
    }
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

  navigateSingUpPage() {
    this.router.navigate(['/register'])
  }
}
