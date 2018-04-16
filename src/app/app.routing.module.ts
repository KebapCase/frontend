import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  { path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
