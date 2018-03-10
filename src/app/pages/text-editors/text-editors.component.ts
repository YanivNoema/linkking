import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { RatingService } from '../../services/rating-service.component';

@Component({
  selector: 'app-text-editors',
  templateUrl: '../../general-codes/html/text-editors.component.html',
  styleUrls: ['../../general-codes/css/text-editors.component.css']
})
export class TextEditorsComponent {
  newText: string;
  itemName = 'text-editors';
  itemNameTitle: string;
  cookieValue: string;

  TEXT_MAX_LENGTH = 128;
  items: Observable<any[]>;

  constructor(private cookieService: CookieService,
    private db: AngularFirestore,
    private ratingService: RatingService) {
    this.items = this.db.collection('/' + this.itemName, ref => ref.orderBy('totalPoints')).valueChanges();
    this.itemNameTitle = this.getTitleFromKebabCase(this.itemName);
  }

  getTitleFromKebabCase(str): string {
    let ret = '';
    let flag = true;
    for (const char of str) {
        if (flag) {
          flag = false;
          ret += char.toUpperCase();
          continue;
        }
        if (char === '-') {
          flag = true;
          ret += ' ';
        } else {
          ret += char;
        }
    }
    return ret;
  }

  sliceText(text) {
    this.newText = text;
    if (text.length > this.TEXT_MAX_LENGTH) {
      this.newText = text.slice(0, this.TEXT_MAX_LENGTH - 3);
      this.newText += '...';
    }
  }

  voteUp(item) {
    if (this.ratingService.voteUp()) {
      this.db.collection('/' + this.itemName).doc(item.title).update({ 'totalPoints': item.totalPoints + 1 });
    }

  }

  voteDown(item) {
    if (this.ratingService.voteDown()) {
      this.db.collection('/' + this.itemName).doc(item.title).update({ 'totalPoints': item.totalPoints - 1 });
    }
  }

  checkMaxVotes(): boolean {
    return this.ratingService.checkMaxVotes();
  }

  updateUrl(e, item) {
    item.image =
    'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg';
  }
}
