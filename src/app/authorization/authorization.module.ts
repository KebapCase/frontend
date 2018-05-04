import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule} from '@angular/forms';
import { SocialComponent } from './social/social.component';
import { AuthorizeModalComponent } from './authorize-modal/authorize-modal.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SignInComponent, SignUpComponent, SocialComponent, AuthorizeModalComponent],
  exports: [SignInComponent, SignUpComponent, SocialComponent, AuthorizeModalComponent]
})
export class AuthorizationModule { }
