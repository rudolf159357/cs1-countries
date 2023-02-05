import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Countries } from '../models/countriesModel';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  europeUrl: string = environment.testUrl + "api/Countries/europe/";
  americaUrl: string = environment.testUrl + "api/Countries/america/";
  asiaUrl: string = environment.testUrl + "api/Countries/asia/";

  constructor(private http: HttpClient) { }

  getEuropeData(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.europeUrl);
  }

  getAmericaData(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.americaUrl);
  }

  getAsiaData(): Observable<Countries[]> {
    return this.http.get<Countries[]>(this.asiaUrl);
  }

  getEuropeDataById(id:number): Observable<Countries> {
    return this.http.get<Countries>(this.europeUrl + id);
  }

  getAmericaDataById(id:number): Observable<Countries> {
    return this.http.get<Countries>(this.americaUrl + id);
  }

  getAsiaDataById(id:number): Observable<Countries> {
    return this.http.get<Countries>(this.asiaUrl + id);
  }
}
