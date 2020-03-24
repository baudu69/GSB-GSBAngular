import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Visiteur} from '../metier/Visiteur';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isAuth = false;
  visiteur = new Visiteur();

  constructor(private httpClient: HttpClient) { }

  /**
   * Requete d'authentification
   */
  signIn(login: string, pwd: string): Observable<any> {
    this.visiteur.id = login;
    this.visiteur.mdp = pwd;
    return this.httpClient.post<any>(environment.apiURL + 'signIn', JSON.stringify(this.visiteur));
  }
}
