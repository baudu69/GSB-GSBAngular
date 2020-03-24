import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActiviteService {

  constructor(private httpClient: HttpClient) { }
  /**
   * Liste les activites
   */
  public listerActivites(): Observable<any> {
    const url = environment.apiURL + 'activite/listerActivite?token=' + localStorage.getItem('token');
    return this.httpClient.get<any[]>(url).pipe();
  }
  /**
   * Ajoute une activite
   */
  public ajoutActivite(date: string, lieu: string, theme: string, motif: string): Observable<any> {
    const url = environment.apiURL + 'activite/ajoutActivite';
    return this.httpClient.post<any[]>(url, {
      dateActivite: date,
      themeActivite: theme,
      lieuActivite: lieu,
      motifActivite: motif,
      token: localStorage.getItem('token')
    }).pipe();
  }

}
