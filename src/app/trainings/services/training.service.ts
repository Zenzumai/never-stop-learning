import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Training } from '../models/training.model';

@Injectable({
  providedIn: 'root',
})
export class TrainingsService {
  private source$: Observable<any> = of(
    {
      name: 'string',
      id: 'string',
      price: 1,
      image: 'string',
      url: 'string',
      description: 'string',
    },
    {
      name: 'string',
      id: 'string',
      price: 1,
      image: 'string',
      url: 'string',
      description: 'string',
    }
  );

  constructor(private http: HttpClient) {}

  getTrainings() {
    return this.source$;
  }

  getTrainingById(id: string): Observable<Training | null> {
    return this.getTrainings().pipe(
      map((Trainings) => {
        const filtered = Trainings.filter((x) => x.id === id);

        if (filtered.length > 0) {
          return filtered[0];
        }

        return null;
      })
    );
  }
}
