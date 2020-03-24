import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import {Visiteur} from '../metier/Visiteur';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  authStatus: boolean;
  login: string;
  pwd: string;
  message: string;
  unVisiteur: Visiteur;
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * Verifie l'authentification et met a jour les variables de session
   */
  onSignIn(): void {
    this.authService.signIn(this.login, this.pwd).subscribe(
      data => {
        if (data.message === 'ok') {
          localStorage.setItem('connected', 'true');
          localStorage.setItem('token', data.token);
          localStorage.setItem('actualise', 'true');
          this.router.navigate(['accueil']);
        }
      },
      Error => {
        this.message = 'Erreur lors de la connexion';
      }
    );
  }
  /**
   * Se deconnecter
   */
  onSignOut() {
    localStorage.setItem('connected', 'false');
    this.authStatus = localStorage.getItem('connected') === 'true';
  }

}
