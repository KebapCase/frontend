import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  loginTwitter() {
    this.authService.loginTwitter();
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }
}
