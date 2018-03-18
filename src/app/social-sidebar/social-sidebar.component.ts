import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { RatingService } from '../services/rating-service.component';


@Component({
  selector: 'app-social-sidebar',
  templateUrl: './social-sidebar.component.html',
  styleUrls: ['./social-sidebar.component.css']
})
export class SoicalSidebarComponent {

  public model: any;
  formArray: any;

  constructor(private modalService: NgbModal,
    public ratingService: RatingService) {
  }


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

  initFormArray(type) {
    if (type === 'contact') {
      this.formArray = {
          headline: 'We\'ll be :) to hear from you ',
          subline: 'Contact us here or via one of our social account',
          name: ' name',
          email: 'email',
          message: 'message',
          type: 'contactUs'
      };
    } else if (type === 'contact') {
      this.formArray = {
        headline: 'The Best of *** your idea',
        subline: 'we promise all the crdits goes to you, so please leave us link to your one of the social account',
        why: 'why',
        what: 'what',
        socialAccount: 'socialAccount'
      };
    } else if (type === 'submit') {
      this.formArray = {
        headline: 'The Best of *** your idea',
        subline: 'we promise all the crdits goes to you, so please leave us link to your one of the social account',
        linkTitle: 'linkTitle',
        linkImage: 'linkImage',
        linkDescription: 'linkDescription',
        linkSource: 'linkSource',
        linkUrl: 'linkUrl',
        type: 'submit'
      };
    }
  }
}
