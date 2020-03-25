import { Component, OnInit } from '@angular/core';
import {types} from 'util';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor() { }
  /**
   * Actualise la page si 'on vient de l'onglet connexion
   */
  ngOnInit(): void {
    console.log(localStorage.getItem('actualise'));
    if (localStorage.getItem('actualise') === 'true') {
      localStorage.setItem('actualise', 'false');
      window.location.reload();
    }
  }

}
