import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { FilmComponent } from './components/films/film/film.component';
import { FilmDetailsComponent } from './components/films/film-details/film-details.component';
import { Page404Component } from './components/shared/page404/page404.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { InfoSiteComponent } from './components/info-site/info-site.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FilmComponent,
    FilmDetailsComponent,
    Page404Component,
    FooterComponent,
    InfoSiteComponent
    ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
