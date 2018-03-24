import { Component } from '@angular/core';
import { ManagerService } from './services/manager-service.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public managerService: ManagerService) {}

}
