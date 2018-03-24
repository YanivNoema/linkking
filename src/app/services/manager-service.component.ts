import { Injectable } from '@angular/core';

@Injectable()
export class ManagerService {
    showMenu = true;
    constructor() { }
    toggle() {
        this.showMenu = this.showMenu ? false : true;
    }

}
