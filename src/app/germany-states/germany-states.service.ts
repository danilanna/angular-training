import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GermanyStates } from './germany-states';

@Injectable({
  providedIn: 'root'
})
export class GermanyStatesService {

  private statesUrl = 'api/states';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getStates(): Observable<GermanyStates[]> {
    return this.http.get<GermanyStates[]>(this.statesUrl);
  }
}
