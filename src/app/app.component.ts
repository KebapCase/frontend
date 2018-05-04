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

  constructor () {}

  openAuthenticationModal() {
    this.isAuthenticationModalVisible = true;
  }

  closeAuthenticationModal() {
    this.isAuthenticationModalVisible = false;
  openModal() {
    this.authModal.open();
  }

  getLoginAction = (): void => {
    this.openAuthenticationModal();
    // TODO: it should be smth like that
    // this.authenticationService.isAuthenticated ? this.openAuthenticationModal() :
    // this.authenticationService.logout()
  }

  getLoginTitle = (): string => {
    return 'Sign In';
    // TODO: it should be smth like that
    // this.authenticationService.isAuthenticated ? 'Sign Out' : 'Sign In'
  closeModal() {
  }
}
