import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticationModalVisible: boolean;

  constructor () {}

  openAuthenticationModal() {
    this.isAuthenticationModalVisible = true;
  }

  closeAuthenticationModal() {
    this.isAuthenticationModalVisible = false;
  }

  getLoginAction = (): void => {
    this.openAuthenticationModal();
    //TODO: it should be smth like that
    // this.authenticationService.isAuthenticated ? this.openAuthenticationModal() :
    // this.authenticationService.logout()
  };

  getLoginTitle = (): string => {
    return 'Sign In';
    //TODO: it should be smth like that
    // this.authenticationService.isAuthenticated ? 'Sign Out' : 'Sign In'
  };
}
