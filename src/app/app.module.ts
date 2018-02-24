import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AuthorizationModule} from './authorization/authorization.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './services/modal/modal.service';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule
  ],
  providers: [ModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
