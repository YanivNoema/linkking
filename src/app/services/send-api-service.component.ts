import { Injectable } from '@angular/core';

@Injectable()
export class SendApiService {

    constructor() {}

    post(url, postBody) {
        const myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        fetch(url, {
            method: 'POST',
            headers: myHeaders,
            mode: 'no-cors',
            cache: 'default',
            body: JSON.stringify(postBody)
        }).then(() => {
        console.log(`${url} ${postBody}`);
        return true;
        });
    }

}
