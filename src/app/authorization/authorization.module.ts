import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SocialComponent } from './social/social.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SingInComponent, SignUpComponent, SocialComponent],
  exports: [SingInComponent, SignUpComponent, SocialComponent]
})
export class AuthorizationModule { }
