import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Praticien} from '../metier/Praticien';
import { TypePraticien } from '../metier/TypePraticien';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PraticienService {

  constructor(private httpClient: HttpClient) { }

  public listerPraticien(): Observable<any> {
    const url = environment.apiURL + 'listePraticien';
    return this.httpClient.get<Praticien[]>(url).pipe();
  }
  public listerPraticienNom(nom: string): Observable<any> {
    const url = environment.apiURL + 'listePraticienNom?nomPraticien=' + nom;
    return this.httpClient.get<Praticien[]>(url).pipe();
  }
  public listerPraticienNomType(nom: string, type: string): Observable<any> {
    const url = environment.apiURL + 'listePraticienNomType?nomPraticien=' + nom + '&type=' + type;
    return this.httpClient.get<Praticien[]>(url).pipe();
  }
  public listerType(): Observable<any> {
    const url = environment.apiURL + 'listeTypes';
    return this.httpClient.get<TypePraticien[]>(url).pipe();
  }
}
