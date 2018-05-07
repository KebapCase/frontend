import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AuthorizationModule} from './authorization/authorization.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavbarComponent} from './navbar/navbar.component';
import {PreviewComponent} from './components/preview/preview.component';
import {AuthService} from './services/auth.service';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from './modal/modal.module';
import {DragAndDropComponent} from './components/drag-and-drop/drag-and-drop.component';
import {Ng2FileDropModule} from 'ng2-file-drop';
import {Ng2CloudinaryModule} from 'ng2-cloudinary';
import {FileUploadModule} from 'ng2-file-upload';
import {ModuleRouting} from './app.routing.module';
import {ProfileModule} from './profile/profile.module';


@NgModule({
  declarations: [
    AppComponent,
    PreviewComponent,
    DragAndDropComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AuthorizationModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2FileDropModule,
    Ng2CloudinaryModule,
    ModalModule,
    FileUploadModule,
    ModuleRouting,
    ProfileModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
