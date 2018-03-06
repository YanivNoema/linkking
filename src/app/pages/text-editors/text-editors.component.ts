import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';



// class Social{

//   icon: string;
//   share: string;

//   constructor(icon_: string, share_: string){
//     this.icon = icon_;
//     this.share = share_;
//   }
// }

@Component({
  selector: 'app-text-editors',
  templateUrl: '../../general-codes/html/text-editors.component.html',
  styleUrls: ['../../general-codes/css/text-editors.component.css']
})
export class TextEditorsComponent implements OnInit {
  newText: string;
  itemName = 'text-editors';
  // socials: Social[] = [];
  cookieValue: string;
  maxVotes = 3;
  cookieExpire = 0.1;
  cookieExpireInMintus = 240;
  counter = 0;

  TEXT_MAX_LENGTH = 128;
  items: Observable<any[]>;

  constructor(private cookieService: CookieService,
    private db: AngularFirestore) {
    this.counter = 0;
    this.items = this.db.collection('/' + this.itemName, ref => ref.orderBy('totalPoints')).valueChanges();
    // this.initSocial();
  }

  ngOnInit(): void {
    // this.cookieService.deleteAll();
    setInterval(() => this.checkExpireCookie(), 1000);
    const cookieExists: boolean = this.cookieService.check('votes');
    if (!cookieExists) {
      this.counter = 0;
    } else {
      this.counter = parseInt(this.cookieService.get('votes'), 10);
    }
  }

  // initSocial(){

  //   // this.socials.push(
  //   //   new Social(
  //   //     "/assets/icons/005-whatsapp.png",
  //   //     "whatsapp://send?text=Hello%20World!'"
  //   //   )
  //   // );

  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/003-facebook.png",
  //       "https://www.facebook.com/sharer/sharer.php?u=www.the-best-text-editors.com"
  //     )
  //   );

  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/004-twitter.png",
  //       "https://twitter.com/home?status=All%20the%20best%20things%20ra
  // tings%20by%20you%20guys,%0Ahttps%3A//goo.gl/sFpnqj%0ASearch%20for%20-%20World's%20Best%20Links"
  //     )
  //   );
  //   /*
  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/001-instagram.png",
  //       "asd"
  //     )
  //   );
  //   */

  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/001-google-plus.png",
  //       "https://plus.google.com/share?url=www.the-best-text-editors.com"
  //     )
  //   );

  //   /*/
  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/004-pinterest.png",
  //       "asd"
  //     )
  //   );
  //    */

  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/003-linkedin.png",
  //       "https://www.linkedin.com/shareArtic
  // le?mini=true&url=www.the-best-text-editors.com&title=The%20Best%20Web%20Browsers&summary=&source="
  //     )
  //   );

  //   this.socials.push(
  //     new Social(
  //       "/assets/icons/002-telegram.png",
  //       "mailto:?subject=Hey%2C%20Look%20what%20I
  // %20found%3A%20The%20best%20web%20browsers&body=Here%20is%20the%20l
  // ink%3A%20www.the-best-text-editors.com%0A%0APowered%20By%3A%20World's%20Best%20Links"
  //     )
  //   );
  // }


  sliceText(text) {
    this.newText = text;
    if (text.length > this.TEXT_MAX_LENGTH) {
      this.newText = text.slice(0, this.TEXT_MAX_LENGTH - 3);
      this.newText += '...';
    }
  }

  voteUp(item) {
    if (!this.checkMaxVotes()) {
      this.counter++;
      this.db.collection('/' + this.itemName).doc(item.title).update({ 'totalPoints': item.totalPoints + 1 });
      this.placeCookie();
    }
  }

  voteDown(item) {
    if (!this.checkMaxVotes()) {
      this.counter++;
      this.db.collection('/' + this.itemName).doc(item.title).update({ 'totalPoints': item.totalPoints - 1 });
      this.placeCookie();
    }
  }

  placeCookie() {
    this.cookieService.set('votes', this.counter.toString(), this.initExpiritionCookie());
  }

  initExpiritionCookie() {
    const now = new Date(),
      cookieExpires = new Date(now);
    cookieExpires.setMinutes(now.getMinutes() + this.cookieExpireInMintus);
    return cookieExpires;
  }

  checkMaxVotes(): boolean {
    return this.counter === this.maxVotes;
  }

  checkExpireCookie() {
    const cookieExists: boolean = this.cookieService.check('votes');
    if (!cookieExists) {
      this.counter = 0;
    } else {
      this.counter = parseInt(this.cookieService.get('votes'), 10);
    }
  }

  updateUrl(e, item) {
    item.image =
    'https://beebom-redkapmedia.netdna-ssl.com/wp-content/uploads/2016/01/Reverse-Image-Search-Engines-Apps-And-Its-Uses-2016.jpg';
  }
}
