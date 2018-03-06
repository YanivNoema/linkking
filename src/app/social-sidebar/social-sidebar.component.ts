import { Component, Inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
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
  selector: 'app-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.css']
})
export class SoicalSidebarComponent {

  public model: any;
  formArray: any;

  constructor(private modalService: NgbModal) {
    this.initFormArray();
  }

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 2 ? []
        : states.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))

  open(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' }).result.then((result) => {
      console.log(`Closed with: ${result}`);
    }, (reason) => {
      console.log(`Dismissed ${this.getDismissReason(reason)}`);
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  initFormArray() {
    //   this.formArray = {
    //     headline: ' headline',
    //     name: ' name',
    //     email: 'email',
    //     message: 'message'
    // };

    this.formArray = {
      headline: 'The Best of *** your idea',
      subline: 'we promise all the crdits goes to you, so please leave us link to your one of the social account',
      why: 'why',
      what: 'what',
      socialAccount: 'socialAccount'
    };

    this.formArray = {
      headline: 'The Best of *** your idea',
      subline: 'we promise all the crdits goes to you, so please leave us link to your one of the social account',
      linkTitle: 'linkTitle',
      linkImage: 'linkImage',
      linkDescription: 'linkDescription',
      linkSource: 'linkSource',
      linkUrl: 'linkUrl',
    };
  }
}
