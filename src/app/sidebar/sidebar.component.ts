import { Component, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { HelperService } from '../services/helper-service.component';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items: Observable<any[]>;
  constructor(private db: AngularFirestore, public helperService: HelperService) {
    this.items  = this.db.collection('/links').valueChanges();
  }
}
