import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SingInComponent, SignUpComponent]
})
export class AuthorizationModule { }
