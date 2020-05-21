import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingsRoutingModule } from './trainings-routing.module';
import { TrainingsComponent } from './trainings.component';
import { TrainingCardComponent } from './training-card/training-card.component';
import { LayoutModule } from '../layout/layout.module';


@NgModule({
  declarations: [TrainingsComponent, TrainingCardComponent],
  imports: [
    CommonModule,
    TrainingsRoutingModule,
    LayoutModule
  ]
})
export class TrainingsModule { }
