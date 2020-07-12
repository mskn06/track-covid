import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONSTANTS } from '../../../CONSTANTS';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrackCovidService {
  constructor(private http: HttpClient) {}

  getCovidInfo(): Observable<any> {
    return this.http.get(CONSTANTS.TRACKCOVID());
  }
}
