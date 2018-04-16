import {RouterModule, Routes} from '@angular/router';
import {GenInformationComponent} from './gen-information/gen-information.component';
import {ModuleWithProviders} from '@angular/core';

const routes: Routes = [
  {path: ':id', component: GenInformationComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);
