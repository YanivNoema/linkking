import { Component, Inject } from '@angular/core';
import { RatingService } from '../services/rating-service.component';

@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(public ratingService: RatingService) {
  }

}
