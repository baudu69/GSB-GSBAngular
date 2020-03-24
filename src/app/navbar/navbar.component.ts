import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  authStatus: boolean;
  constructor() { }
  /**
   * Verifie l'etat de l'authentification pour afficher les onglets
   * connexion et deconnexion
   */
  ngOnInit(): void {
    this.authStatus = localStorage.getItem('connected') === 'true';
  }
  /**
   * Deconnexion
   */
  onSignOut() {
    localStorage.setItem('connected', 'false');
    this.authStatus = localStorage.getItem('connected') === 'true';
  }

}
