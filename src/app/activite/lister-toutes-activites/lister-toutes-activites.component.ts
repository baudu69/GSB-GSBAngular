import { Component, OnInit } from '@angular/core';
import {Activites} from '../../metier/Activites';
import {ActiviteService} from '../../service/activite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lister-toutes-activites',
  templateUrl: './lister-toutes-activites.component.html',
  styleUrls: ['./lister-toutes-activites.component.scss']
})
export class ListerToutesActivitesComponent implements OnInit {

  lesActivites: Activites[];
  chargement = false;
  constructor(private serviceActivite: ActiviteService, private routeur: Router) { }

  /**
   * Charge la liste des activites
   */
  ngOnInit(): void {
    this.serviceActivite.listerActivites().subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          this.lesActivites = data.lesActivites;
          localStorage.setItem('token', data.token);
        } else {
          this.routeur.navigate(['/signIn']);
        }
      }
    );
  }

}
