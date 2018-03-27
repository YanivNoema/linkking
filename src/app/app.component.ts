import { Component, OnInit } from '@angular/core';
import { ManagerService } from './services/manager-service.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = true;
  constructor(public managerService: ManagerService, public location: Location) {}

  ngOnInit() {
    this.showMenu = true;
      if (this.location.path() === '') { // home page
        this.showMenu = false;
      }
  }

}
