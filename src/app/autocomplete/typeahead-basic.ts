import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { HelperService } from '../services/helper-service.component';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'ngbd-typeahead-basic',
  templateUrl: './typeahead-basic.html',
  styles: [`.form-control { width: 500px; }`]
})
export class NgbdTypeaheadBasic {
  public model: any;
  res: any;
  items: Observable<any[]>;
  searchItem: any;
  constructor(private db: AngularFirestore,
     private router: Router,
     private helperService: HelperService) {
    this.items  = this.db.collection('/links').valueChanges();
    this.items.subscribe(
      (res) => this.initItems(res),
      (err) => console.log(err),
    );
  }
  selectedItem(item) {
    // this.clickedItem=item.item;
    // this.router.navigateByUrl(`/${item.item}`);
    console.log(item);
  }

  initItems(items) {
    this.searchItem = items.map(item => this.helperService.getTitleFromKebabCase(item.titleLink));
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => this.searchItem.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
}
// $(document).ready(function() {
//   const style = {
//     'background-color': 'none'
//   };
//   setInterval('500', function() {
//     if ($('.dropdown-menu')) {
//       $('.dropdown-menu').css({'background-color': 'red'});
//       return;
//     }
//   });

//   $('.dropdown-menu').css({'background-color': 'red'});
// });
