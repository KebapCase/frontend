import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { AuthorizeModalComponent } from './authorize-modal/authorize-modal.component';
import { NavtabModule } from '../navtab/navtab.module';
import {AppModule} from '../app.module';
import {ModalModule} from '../modal/modal.module';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NavtabModule,
    ModalModule
  ],
  declarations: [SingInComponent, SignUpComponent, SocialComponent, AuthorizeModalComponent],
  exports: [SingInComponent, SignUpComponent, SocialComponent, AuthorizeModalComponent]
})
export class AuthorizationModule { }
