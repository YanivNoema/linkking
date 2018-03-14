import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FireBaseService {

    constructor(private db: AngularFirestore) {}

    addItem(newItem, documnetName) {
        this.db.collection('/' + documnetName).doc(newItem.title).set({
        title: newItem.title,
        totalPoints: 0,
        description: newItem.description,
        link: newItem.link,
        source: newItem.source,
        email: newItem.email,
        editorsUpload: false,
        image: newItem.image
      });
  }
}
