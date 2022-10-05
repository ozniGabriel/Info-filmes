import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { FilmComponent } from './components/films/film/film.component';
import { InfoSiteComponent } from './components/info-site/info-site.component';
import { Page404Component } from './components/shared/page404/page404.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home', component: FilmComponent
  },
  {path: 'details/:id', component: FilmDetailsComponent},
  {path: 'sobre', component: InfoSiteComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
