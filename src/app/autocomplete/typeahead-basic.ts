import {Component, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { HelperService } from '../services/helper-service.component';
import { Router } from '@angular/router';
declare var $: any;

import {NgbTypeahead} from '@ng-bootstrap/ng-bootstrap';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

const states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
  'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
  'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
  'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
  'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
  'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
  'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
  'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

@Component({
  selector: 'ngbd-typeahead-basic',
  templateUrl: './typeahead-basic.html',
  styles: [`.form-control { width: 500px; }`]
})
export class NgbdTypeaheadBasic {

  @ViewChild('instance') instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();
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

    search = (text$: Observable<string>) =>
    text$
      .debounceTime(200).distinctUntilChanged()
      .merge(this.focus$)
      .merge(this.click$.filter(() => !this.instance.isPopupOpen()))
      .map(term => (term === '' ? this.searchItem : this.searchItem.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))

  selectedItem($event, input) {
    $event.preventDefault();
    input.value = '';
    this.router.navigateByUrl(this.helperService.getKebabCaseFromTitle($event.item));
  }

  initItems(items) {
     const retItems = items.map(item => this.helperService.getTitleFromKebabCase(item.titleLink));
     this.searchItem = retItems.filter(title => this.helperService.isthisItemNotEqualThisPage(title));
  }
}
