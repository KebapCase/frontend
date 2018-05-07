import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from './services/auth.service';
import {AuthorizeModalComponent} from './authorization/authorize-modal/authorize-modal.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  @ViewChild(AuthorizeModalComponent)
  authModal: AuthorizeModalComponent;

  constructor() {
  }

  getLoginAction = (): void => {
    this.authModal.open()
    // TODO: it should be smth like that
    // this.authenticationService.isAuthenticated ? this.openAuthenticationModal() :
    // this.authenticationService.logout()
  }

  getLoginTitle = (): string => {
    return 'Sign In';
    // TODO: it should be smth like that
    // this.authenticationService.isAuthenticated ? 'Sign Out' : 'Sign In'
  }

  closeModal() {
  }

  ngOnInit(): void {
  }
}
