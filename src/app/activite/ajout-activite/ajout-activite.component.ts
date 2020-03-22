import { Component, OnInit } from '@angular/core';
import {ActiviteService} from '../../service/activite.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ajout-activite',
  templateUrl: './ajout-activite.component.html',
  styleUrls: ['./ajout-activite.component.scss']
})
export class AjoutActiviteComponent implements OnInit {

  private dateActivite: string;
  private lieuActivite: string;
  private themeActivite: string;
  private motifActivite: string;
  constructor(private serviceActivite: ActiviteService, private routeur: Router) { }

  ngOnInit(): void {
  }
  public valider(): void {
    if ((this.dateActivite !== undefined) && (this.lieuActivite !== undefined) && (this.themeActivite !== undefined) && (this.motifActivite !== undefined)) {
      this.serviceActivite.ajoutActivite(this.dateActivite, this.lieuActivite, this.themeActivite, this.motifActivite).subscribe(
        (data) => {
          if (data.token !== 'Invalide') {
            localStorage.setItem('token', data.token);
            if (data.Message === 'OK') {
              this.routeur.navigate(['/listerToutesActivites']);
            } else if (data.Message === 'Erreur') {
              alert('Erreur lors de l\'ajout : ' + data.Erreur);
            }
          } else {
            this.routeur.navigate(['/signIn']);
          }
        }
      );
    }
  }

}
