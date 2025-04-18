import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Trip, tripSchema } from '../interfaces/trips.models';
import { map, catchError, Observable, throwError } from 'rxjs';
import { z } from 'zod';

@Injectable({ providedIn: 'root' })
export class SplitngoService {
  private _http = inject(HttpClient);

  getTripList(): Observable<Trip[]> {
    return this._http.get<Trip[]>('http://localhost:8080/bff/trips').pipe(
      map(data => {
        const tripsSchema = z.array(tripSchema);
        const result = tripsSchema.safeParse(data);

        if (!result.success) {
          console.error('Erreur de validation Zod :', result.error.format());
          throw new Error('Les données reçues du backend sont invalides');
        }

        return result.data;
      }),
      catchError(err => {
        console.error('Erreur HTTP ou de validation :', err);
        return throwError(() => err);
      })
    );
  }
}
