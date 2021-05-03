import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProfileGalleryComponent} from './profile-gallery/profile-gallery.component';
import {SetupDateComponent} from './date/setup-date/setup-date.component';
import {NotFoundComponent} from './error/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: ProfileGalleryComponent},
  {path: 'setup-date/:name', component: SetupDateComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
