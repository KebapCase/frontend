
import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {CreateEventComponent} from './components/create-event/create-event.component';
import {MainPageComponent} from './components/main-page/main-page.component';




@NgModule({
  imports: [RouterModule.forRoot([
      {
        path: 'new',
        component: CreateEventComponent
      },
      {
        path: '',
        component: MainPageComponent
      }
    ],
    {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
