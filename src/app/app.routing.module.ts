import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {MainPageComponent} from './components/main-page/main-page.component';
import {EventPageComponent} from './components/event-page/event-page.component';

const routes: Routes = [
  {path: 'profile', loadChildren: 'app/profile/profile.module#ProfileModule'},
  {path: 'new', component: CreateEventComponent},
  {path: 'event/:id', component: EventPageComponent},
  {path: '', component: MainPageComponent}
];

export const ModuleRouting: ModuleWithProviders = RouterModule.forRoot(routes);
