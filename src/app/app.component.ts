import { Component, OnInit } from '@angular/core';
import { ManagerService } from './services/manager-service.component';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showMenu = true;
  constructor(private router: Router, public managerService: ManagerService, public location: Location) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.showMenu = true;
      if (this.location.path() === '') { // home page
        this.showMenu = false;
      }
  }

}
