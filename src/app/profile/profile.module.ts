import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenInformationComponent } from './gen-information/gen-information.component';
import { ModuleRouting } from './profile.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ModuleRouting
  ],
  declarations: [GenInformationComponent]
})
export class ProfileModule { }
