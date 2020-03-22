import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PraticienService} from '../../service/praticien.service';
import {Activites} from '../../metier/Activites';
import { Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lister-activite',
  templateUrl: './lister-activite.component.html',
  styleUrls: ['./lister-activite.component.scss']
})
export class ListerActiviteComponent implements OnInit {
  idPraticien: string;
  lesActivites: Array<Activites>;
  lesAutresActivites: Array<Activites>;
  idActiviteChoisi: number;
  chargement = false;

  constructor(private route: ActivatedRoute, private servicePraticien: PraticienService, private routeur: Router) { }

  ngOnInit(): void {
    this.chargement = true;
    this.idPraticien = this.route.snapshot.params.idPraticien;
    this.idActiviteChoisi = null;
    this.servicePraticien.listerActiviteNonPraticien(this.idPraticien).subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          this.lesAutresActivites = data.lesActivites;
          localStorage.setItem('token', data.token);
          this.servicePraticien.listerActivite(this.idPraticien).subscribe(
            (data2) => {
              if (data2.token !== 'Invalide') {
                this.lesActivites = data2.lesActivites;
                localStorage.setItem('token', data2.token);
              } else {
                this.routeur.navigate(['/signIn']);
              }
              this.chargement = false;
            }
          );
        } else {
          this.routeur.navigate(['/signIn']);
        }
      }
    );
  }
  supprimerActivite(idActivite: number): void {
    this.servicePraticien.supprimerActivite(this.idPraticien, idActivite).subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          localStorage.setItem('token', data.token);
          this.chargement = true;
          this.idPraticien = this.route.snapshot.params.idPraticien;
          this.servicePraticien.listerActivite(this.idPraticien).subscribe(
            (data2) => {
              if (data2.token !== 'Invalide') {
                this.lesActivites = data2.lesActivites;
                localStorage.setItem('token', data2.token);
                this.servicePraticien.listerActiviteNonPraticien(this.idPraticien).subscribe(
                  (data3) => {
                    if (data3.token !== 'Invalide') {
                      this.lesAutresActivites = data3.lesActivites;
                      localStorage.setItem('token', data3.token);
                    } else {
                      this.routeur.navigate(['/signIn']);
                    }
                  }
                );
              } else {
                this.routeur.navigate(['/signIn']);
              }
              this.chargement = false;
            }
          );
        } else {
          this.routeur.navigate(['/signIn']);
        }
      }
    );
  }
  ajouterActivite(): void {
    this.servicePraticien.ajouterActivitePraticien(this.idPraticien, this.idActiviteChoisi).subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          let activite: Activites;
          activite = data.uneActivite;
          localStorage.setItem('token', data.token);
          this.lesActivites.push(activite);
          this.servicePraticien.listerActiviteNonPraticien(this.idPraticien).subscribe(
            (data2) => {
              if (data2.token !== 'Invalide') {
                this.lesAutresActivites = data2.lesActivites;
                localStorage.setItem('token', data2.token);
              } else {
                this.routeur.navigate(['/signIn']);
              }
            }
          );
        } else {
          this.routeur.navigate(['/signIn']);
        }
      }
    );
  }

}
