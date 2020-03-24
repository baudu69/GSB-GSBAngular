import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import {Routes} from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ListerPraticienComponent } from './praticien/lister-praticien/lister-praticien.component';
import { ListerActiviteComponent } from './praticien/lister-activite/lister-activite.component';
import { ListerToutesActivitesComponent } from './activite/lister-toutes-activites/lister-toutes-activites.component';
import { AjoutActiviteComponent } from './activite/ajout-activite/ajout-activite.component';
import { AccueilComponent } from './accueil/accueil.component';

const appRoutes: Routes = [
  { path: 'navbar', component: NavbarComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    ListerPraticienComponent,
    ListerActiviteComponent,
    ListerToutesActivitesComponent,
    AjoutActiviteComponent,
    AccueilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
