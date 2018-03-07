import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';
import * as auth0 from 'auth0-js';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import {tap} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const url = '';

@Injectable()
export class AuthService {

  userProfile: any;
  auth0 = new auth0.WebAuth({
    clientID: '7aIJ5gkscx33kqJDq5JCh08xXxveKdHW',
    domain: 'vladnareyko.eu.auth0.com',
    responseType: 'token id_token',
    audience: 'https://vladnareyko.eu.auth0.com/userinfo',
    redirectUri: 'http://localhost:4200',
    scope: 'openid profile'
  });

  constructor( private http: HttpClient
               /*public router: Router*/) {}

  public getProfile(cb): void {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('Access Token must exist to fetch profile');
    }

    const self = this;
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        self.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  public loginFacebook(): void {
    this.auth0.authorize({
      connection: 'facebook'
    });
  }

  public loginTwitter(): void {
    this.auth0.authorize({
      connection: 'twitter'
    });
  }

  public loginGoogle(): void {
    this.auth0.authorize({
      connection: 'google-oauth2'
    });
  }

  private socialLogin() {
    return this.http.post<User>(url, new User(), httpOptions).pipe(
      tap(token => this.setServerSession(token))
    );
  }

  public handleAuthentication(): void {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        window.location.hash = '';
        this.socialLogin();
        this.setAuth0Session(authResult);
        // this.router.navigate(['/home']);
      } else if (err) {
        // this.router.navigate(['/home']);
        console.log(err);
      }
    });
  }

  private setAuth0Session(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  private setServerSession(token) {
    const expiresAt = JSON.stringify(this.getTokenExpirationDate(token).getTime());
    localStorage.setItem('token', token);
    localStorage.setItem('exp', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('token');
    localStorage.removeItem('exp');
    // Go back to the home route
    // this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    const serverExp = JSON.parse(localStorage.getItem('exp'));
    return (new Date().getTime() < expiresAt) && (new Date().getTime() < serverExp); // TODO check server token expiration
  }

  getTokenExpirationDate(token: string): Date {
    const decoded = jwt_decode(token);

    if (decoded.exp === undefined) {
      return null;
    }

    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

}
