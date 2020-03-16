import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {ListerPraticienComponent} from './praticien/lister-praticien/lister-praticien.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'signIn', component: ConnexionComponent},
  { path: 'listerPraticien', component: ListerPraticienComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
