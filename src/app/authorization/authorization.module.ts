import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingInComponent } from './sing-in/sing-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [SingInComponent, SignUpComponent],
  exports: [SingInComponent, SignUpComponent]
})
export class AuthorizationModule { }
