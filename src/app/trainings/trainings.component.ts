import { Component, OnInit } from '@angular/core';
import { TrainingsService } from './services/training.service';
import { Observable } from 'rxjs';
import { Training } from './models/training.model';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss']
})
export class TrainingsComponent implements OnInit {
  trainings$: Observable<Training[]>;
  trainings = [];

  constructor(private trainingsService: TrainingsService) { }

  ngOnInit(): void {
    this.trainings$ = this.trainingsService.getTrainings();
    this.trainings$.subscribe(results => {
      this.trainings.push(results);
    })
    console.log(this.trainings);
  }

}
