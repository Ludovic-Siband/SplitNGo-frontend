import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip } from '../interfaces/trips.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SplitngoService {
  private _http = inject(HttpClient);

  getTripList(): Observable<Trip[]> {
    return this._http.get<Trip[]>('http://localhost:8080/bff/trips');
  }
}
