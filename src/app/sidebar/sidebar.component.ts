import { Component, Inject } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'side-bar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.items  = this.db.collection('/links').valueChanges();
  }
}
