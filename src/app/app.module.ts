import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AuthorizationModule } from './authorization/authorization.module';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal/modal.component';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AuthService } from './services/auth.service';
import {ModalModule} from './modal/modal.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    BrowserAnimationsModule,
    ModalModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
