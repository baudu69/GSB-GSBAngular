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
  /**
   * Charge la liste des activites a ajouter
   * Charge la liste des activites du praticien
   */
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
  /**
   * Supprime une invitation, recharge la liste des activites, des activites a ajouter
   * et des invitations
   */
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
  /**
   * Ajoute une invitation, recharge la liste des activites, des activites a ajouter
   * et des invitations
   */
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
  /**
   * Specialise (ou pas) une invitation
   */
  Specialiser(faire: boolean, idActivite: number): void {
    let faire1: string;
    if (faire) {
      faire1 = '1';
    } else {
      faire1 = '0';
    }
    this.servicePraticien.specialiser(idActivite, this.idPraticien, faire1).subscribe(
        (data) => {
          if (data.token !== 'Invalide') {
            if (data.Message === 'OK') {
              this.lesActivites = data.lesActivites;
              localStorage.setItem('token', data.token);
            }
          } else {
            this.routeur.navigate(['/signIn']);
          }
          this.chargement = false;
        }
      );
    }
}
