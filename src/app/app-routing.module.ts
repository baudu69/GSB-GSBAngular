import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {ListerPraticienComponent} from './praticien/lister-praticien/lister-praticien.component';
import {ListerActiviteComponent} from './praticien/lister-activite/lister-activite.component';
import {ListerToutesActivitesComponent} from './activite/lister-toutes-activites/lister-toutes-activites.component';
import {AjoutActiviteComponent} from './activite/ajout-activite/ajout-activite.component';

const routes: Routes = [
  { path: 'navbar', component: NavbarComponent },
  { path: 'signIn', component: ConnexionComponent},
  { path: 'listerPraticien', component: ListerPraticienComponent},
  { path: 'listerToutesActivites', component: ListerToutesActivitesComponent},
  { path: 'listerActivite/:idPraticien', component: ListerActiviteComponent},
  { path: 'ajoutActivite', component: AjoutActiviteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
