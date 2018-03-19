import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from './services/auth.service';
import {AuthorizeModalComponent} from './authorization/authorize-modal/authorize-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(AuthorizeModalComponent)
    authModal: AuthorizeModalComponent;

  title = 'app';
  profile: any;

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
      });
    }
  }

  openModal() {
    this.authModal.open();
  }

  logout() {
    this.auth.logout();
  }

  closeModal() {
  }

}
