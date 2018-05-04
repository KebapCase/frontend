import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AuthorizationModule} from './authorization/authorization.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import {PreviewComponent} from './components/preview/preview.component';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PreviewComponent
    ModalComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
