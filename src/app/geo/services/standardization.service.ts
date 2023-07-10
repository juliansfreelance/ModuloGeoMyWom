import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Address } from '../interfaces/addressStandar';

@Injectable({ providedIn: 'root' })

export class StandardizationService {

  private environment: string = 'https://dev.wom.co/funcionalidadMiWom/';
  private serviceName: string = 'geo.wom';
  private security: string = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJZbTJtWDRleFgzWG8rdjIxZWdkVFl3XHUwMDNkXHUwMDNkIiwiaWF0IjoxNjg4OTQ4MTYwNzU5LCJleHAiOjE2OTY4OTY5NjA3NTl9.Q7acnDkyS-th0HGsvYeGodwOQEH-u-sOuenr6UVsB0Y';


  constructor( private http: HttpClient ) { }

  getStandardization(ciudadId: string, address: string): Observable<Address[]> {
    const bodyRequest = {
      init: {
        isRedirect: 'JSON',
        query: 'GET_STANDARDIZATION'
      },
      body: {
        city: ciudadId,
        address: address.toString(),
      }
    }
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Access-Control-Security', this.security);

    return this.http.post<Address[]>(`${this.environment}${this.serviceName}`, bodyRequest, { headers });
  }


}
