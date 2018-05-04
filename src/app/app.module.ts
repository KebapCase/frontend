import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AuthorizationModule} from './authorization/authorization.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {PreviewComponent} from './components/preview/preview.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PreviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
