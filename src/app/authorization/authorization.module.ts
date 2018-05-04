import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SocialComponent} from './social/social.component';
import {AuthorizeModalComponent} from './authorize-modal/authorize-modal.component';
import {NavtabModule} from '../navtab/navtab.module';
import {AppModule} from '../app.module';
import {ModalModule} from '../modal/modal.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavtabModule,
    ModalModule
  ],
  declarations: [SignInComponent, SignUpComponent, SocialComponent, AuthorizeModalComponent],
  exports: [SignInComponent, SignUpComponent, SocialComponent, AuthorizeModalComponent]
})
export class AuthorizationModule {
}
