import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-bar',
  templateUrl: './social-bar.component.html',
  styleUrls: ['./social-bar.component.css']
})
export class SoicalBarComponent {
    @Input() items: any;

    constructor() {
    }
  }
