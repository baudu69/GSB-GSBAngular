import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Praticien} from '../metier/Praticien';
import { TypePraticien } from '../metier/TypePraticien';
import {environment} from '../../environments/environment';
import {Activites} from '../metier/Activites';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

  constructor(private httpClient: HttpClient) { }

  public listerPraticien(): Observable<any> {
    const url = environment.apiURL + 'praticien/listePraticien?token=' + localStorage.getItem('token');
    return this.httpClient.get<any[]>(url).pipe();
  }
  public listerPraticienNom(nom: string): Observable<any> {
    const url = environment.apiURL + 'praticien/listePraticienNom?nomPraticien=' + nom + '&token=' + localStorage.getItem('token');
    return this.httpClient.get<any[]>(url).pipe();
  }
  public listerPraticienNomType(nom: string, type: string): Observable<any> {
    const url = environment.apiURL + 'praticien/listePraticienNomType?nomPraticien=' + nom + '&type=' + type + '&token=' + localStorage.getItem('token');
    return this.httpClient.get<any[]>(url).pipe();
  }
  public listerType(): Observable<any> {
    const url = environment.apiURL + 'praticien/listeTypes?token=' + localStorage.getItem('token');
    return this.httpClient.get<any>(url).pipe();
  }
  public listerActivite(idPraticien: string): Observable<any> {
    const url = environment.apiURL + 'praticien/listeActivite?idPraticien=' + idPraticien + '&token=' + localStorage.getItem('token');
    return this.httpClient.get<any[]>(url).pipe();
  }
  public listerActiviteNonPraticien(idPraticien: string): Observable<any> {
    const url = environment.apiURL + 'praticien/listeActivitesNonPraticien?idPraticien=' + idPraticien + '&token=' + localStorage.getItem('token');
    return this.httpClient.get<Activites[]>(url).pipe();
  }
  public supprimerActivite(idPraticien: string, idActivite: number): Observable<any> {
    const url = environment.apiURL + 'praticien/supprimerActivite?idPraticien=' + idPraticien + '&idActivite=' + idActivite + '&token=' + localStorage.getItem('token');
    return this.httpClient.delete(url).pipe();
  }
  public ajouterActivitePraticien(idPraticien: string, idActivite: number): Observable<any> {
    const url = environment.apiURL + 'praticien/ajouterActivitePraticien?idPraticien=' + idPraticien + '&idActivite='
      + idActivite + '&token=' + localStorage.getItem('token');
    return this.httpClient.get(url).pipe();
  }
  public specialiser(idActivite1: number, idPraticien1: string, faire1: string): Observable<any> {
    const url = environment.apiURL + 'praticien/specialiser'
    return this.httpClient.post(url, {idActivite: idActivite1, idPraticien: idPraticien1, faire: faire1, token: localStorage.getItem('token')}).pipe();
  }
}
