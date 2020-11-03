import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { GermanyStates } from './germany-states';
import { catchError } from 'rxjs/operators';

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
    return this.http.get<GermanyStates[]>(this.statesUrl)
    .pipe(catchError(this.handleError<GermanyStates[]>('getStates', [])));
  }

  getState(id: number): Observable<GermanyStates> {
    const url = `${this.statesUrl}/${id}`;
    return this.http.get<GermanyStates>(url)
    .pipe(catchError(this.handleError<GermanyStates>('getState', {} as GermanyStates)));
  }

  updateState(state: GermanyStates): Observable<GermanyStates> {
    return this.http.put<GermanyStates>(this.statesUrl, state, this.httpOptions)
    .pipe(catchError(this.handleError<GermanyStates>('updateState', {} as GermanyStates)));
  }

  deleteState(id: number): Observable<GermanyStates> {
    const url = `${this.statesUrl}/${id}`;
    return this.http.delete<GermanyStates>(url, this.httpOptions).pipe(
      catchError(this.handleError<GermanyStates>('deleteState'))
    );
  }

  private handleError<T>(operation: string, result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
