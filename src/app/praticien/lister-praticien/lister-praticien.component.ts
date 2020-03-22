import { Component, OnInit } from '@angular/core';
import {PraticienService} from '../../service/praticien.service';
import {Praticien} from '../../metier/Praticien';
import {Activites} from '../../metier/Activites';
import {TypePraticien} from '../../metier/TypePraticien';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-lister-praticien',
  templateUrl: './lister-praticien.component.html',
  styleUrls: ['./lister-praticien.component.scss']
})
export class ListerPraticienComponent implements OnInit {

  chargement = false;
  nomPraticien: string;
  lesPraticien: Array<Praticien>;
  lesTypes: Array<TypePraticien>;
  typeChoisi: string;
  constructor(private praticienService: PraticienService, private routeur: Router) { }

  ngOnInit(): void {
    this.nomPraticien = '';
    this.chargement = true;
    this.praticienService.listerType().subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          this.lesTypes = data.lesTypes;
          localStorage.setItem('token', data.token);
          this.praticienService.listerPraticien().subscribe(
            (data2) => {
              if (data2.token !== 'Invalide') {
                this.lesPraticien = data2.lesPraticiens;
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
      });
  }
  chargerPraticienNom(): void {
    this.chargement = true;
    this.praticienService.listerPraticienNom(this.nomPraticien).subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          this.lesPraticien = data.lesPraticiens;
          localStorage.setItem('token', data.token);
        } else {
          this.routeur.navigate(['/signIn']);
        }
        this.chargement = false;
      }
    );
  }
  chargerPraticienNomType(): void {
    this.chargement = true;
    this.praticienService.listerPraticienNomType(this.nomPraticien, this.typeChoisi).subscribe(
      (data) => {
        if (data.token !== 'Invalide') {
          this.lesPraticien = data.lesPraticiens;
          localStorage.setItem('token', data.token);
        } else {
          this.routeur.navigate(['/signIn']);
        }
        this.chargement = false;
      }
    );
  }

}
