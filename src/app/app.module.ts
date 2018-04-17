import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AuthorizationModule} from './authorization/authorization.module';

import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PreviewComponent} from './components/preview/preview.component';
import {DragAndDropComponent} from './components/drag-and-drop/drag-and-drop.component';
import {Ng2FileDropModule} from 'ng2-file-drop';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';


@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    PreviewComponent,
    DragAndDropComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    BrowserAnimationsModule,
    Ng2FileDropModule,
    Ng2CloudinaryModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
