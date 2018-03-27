import {Component, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Observable<any[]>;
  constructor(private db: AngularFirestore) {
    this.items  = this.db.collection('/links').valueChanges();
  }
  ngOnInit() {}
}
