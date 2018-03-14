import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie-service';

@Injectable()
export class HelperService {
    constructor() { }

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
