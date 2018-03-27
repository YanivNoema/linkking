import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';
import { Location } from '@angular/common';

@Injectable()
export class HelperService {
    constructor(public location: Location) { }

    isthisItemNotEqualThisPage(item) {
        return this.location.path() !== this.getKebabCaseFromTitle(item);
    }

    getKebabCaseFromTitle(str): string {
        return `/${str.replace(/\s+/g, '-').toLowerCase()}`;
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
}
