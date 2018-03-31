import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable()
export class FireBaseService {

    constructor(private db: AngularFirestore) {}
    addItem(newItem, collectionName) {
        this.db.collection(collectionName).doc(newItem.linkTitle).set({
        title: newItem.linkTitle,
        totalPoints: 0,
        description: newItem.linkDescription,
        link: newItem.linkUrl,
        source: newItem.linkSource,
        // email: newItem.email,
        editorsUpload: false,
        image: newItem.linkImage
      });
  }
}
