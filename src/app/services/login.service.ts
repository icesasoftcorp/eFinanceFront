import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthData } from '../models/auth-data';
import { StorageService } from './storage.service';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAuthenticated = false;
  sessionExpirationTimer: any;
  private userId: string;
  private token: string;
  private expiresIn: number;
  private authStatusListener = new Subject<boolean>();

  /**
   * Constructor
   *
   * @param http Http client
   * @param storage Storage service
   * @param router Routing library
   */
  constructor(private http: HttpClient, private storage: StorageService, private router: Router) { }

  /**
   * Gets the auth token
   *
   * @returns Auth token
   */
  getToken() {
    if(this.token != null && this.token !== ''){
      return this.token;
    }
    const token = this.storage.get('token');
    return token;
  }

  /**
   * Gets the user ID
   *
   * @returns User ID
   */
  getUserId() {
    return this.userId;
  }

  loginUser(authData: AuthData) {
    this.http.post<{token: string; expiresIn: number}>(BACKEND_URL + '/user/login', authData)
      .subscribe(response => {
        console.log(response);
        if (response.token) {
          this.isAuthenticated = true;
          this.setAuthTimer(response.expiresIn);
          const now = new Date();
          const expiresInDuration = response.expiresIn;
          const expirationDate = new Date (now.getTime() +  expiresInDuration * 1000);
          this.setAuthData(response.token, expirationDate);
          this.router.navigate(['app']);
        }
      });
  }

  /**
   * Stores the auth data in sqlite
   *
   * @param token auth token
   * @param expiration expiration time
   * @param username Token for refreshing session
   */
  private setAuthData(token: string, expiration: Date) {
    this.storage.set('token', token);
    this.token = token;
    this.storage.set('expiration', expiration.toISOString());
  }
  /**
   * Sets the timer when session expires
   *
   * @param duration
   */
  private setAuthTimer(duration: number) {
    this.sessionExpirationTimer = setTimeout(() => {
      this.refreshToken();
    }, duration * 1000);
  }

  /**
   * Gets the Auth Data
   *
   * @returns Auth Data
   */
  private getAuthData() {
    const token = this.storage.get('token');
    const expirationDate = this.storage.get('expiration');
    const userId = this.storage.get('userId');
    if (!token || !expirationDate) {
      return;
    }
    return {
      token,
      expirationDate: new Date (expirationDate),
      userId
    };
  }

  /**
   * Updates the auth token
   */
  private refreshToken() {
    const authInformation = this.getAuthData();
    if (!authInformation) {
      return;
    }
    const now = new Date();
    const expiresIn = authInformation.expirationDate.getTime() - now.getTime();
    if (expiresIn > 0) {
      this.token = authInformation.token;
      this.isAuthenticated = true;
      this.userId = authInformation.userId;
      this.setAuthTimer(expiresIn / 1000);
      this.authStatusListener.next(true);
    }
  }
}
