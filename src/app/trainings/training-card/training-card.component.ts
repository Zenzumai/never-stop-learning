import { Component, OnInit, Input } from '@angular/core';
import { Training } from '../models/training.model';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.scss']
})
export class TrainingCardComponent implements OnInit {

  @Input() training: Training;
  @Input() showBuyButton: boolean;
  @Input() type: 'horizontal' | 'vertical' = 'vertical';

  constructor() { }

  ngOnInit(): void {
  }

}
