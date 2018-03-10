import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class RatingService {
    cookieValue: string;
    maxVotes = 3;
    cookieExpire = 0.1;
    cookieExpireInMintus = 240;
    counter = 0;
    TEXT_MAX_LENGTH = 128;

    constructor(private cookieService: CookieService,
        private db: AngularFirestore) {
        setInterval(() => this.checkExpireCookie(), 1000);
        const cookieExists: boolean = this.cookieService.check('votes');
        if (!cookieExists) {
            this.counter = 0;
        } else {
            this.counter = parseInt(this.cookieService.get('votes'), 10);
        }
    }

    voteUp() {
        if (!this.checkMaxVotes()) {
            this.counter++;
            this.placeCookie();
            return true;
        }

        return false;
    }

    voteDown() {
        if (!this.checkMaxVotes()) {
            this.counter++;
            this.placeCookie();
            return true;
        }

        return false;
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

}
