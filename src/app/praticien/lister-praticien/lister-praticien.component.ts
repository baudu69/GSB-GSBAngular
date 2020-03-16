import { Component, OnInit } from '@angular/core';
import {PraticienService} from '../../service/praticien.service';
import {Praticien} from '../../metier/Praticien';
import {Activites} from '../../metier/Activites';
import {TypePraticien} from '../../metier/TypePraticien';

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
  constructor(private praticienService: PraticienService) { }

  ngOnInit(): void {
    this.nomPraticien = '';
    this.chargement = true;
    this.praticienService.listerType().subscribe(
      (data) => {
        this.lesTypes = data;
      });
    this.praticienService.listerPraticien().subscribe(
      (data) => {
        this.lesPraticien = data;
        this.chargement = false;
      }
    );
  }
  chargerPraticienNom(): void {
    this.chargement = true;
    this.praticienService.listerPraticienNom(this.nomPraticien).subscribe(
      (data) => {
        this.lesPraticien = data;
        this.chargement = false;
      }
    );
  }
  chargerPraticienNomType(): void {
    this.chargement = true;
    this.praticienService.listerPraticienNomType(this.nomPraticien, this.typeChoisi).subscribe(
      (data) => {
        this.lesPraticien = data;
        this.chargement = false;
      }
    );
  }

}
