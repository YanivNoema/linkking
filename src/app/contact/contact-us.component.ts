import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFire } from 'angularfire2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SendApiService } from '../services/send-api-service.component';
import { FireBaseService } from '../services/firebase-service.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @Input() formArray: any;
  showSuccess: boolean;
  form: FormGroup;
  formTypes = {
    contactUs: {
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    },
    submit: {
      // name: ['', Validators.required],
      // email: ['', [
        // Validators.required,
        // Validators.email]
      // ],
      linkTitle: ['', Validators.required],
      linkImage: ['', Validators.required],
      linkDescription: ['', Validators.required],
      linkSource: ['', Validators.required],
      linkUrl: ['', Validators.required]
    },
    // suggest: {}
  };

  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private sendApiService: SendApiService,
    private fireBaseService: FireBaseService,
    private router: Router) {
  }

  ngOnInit() {
    this.createForm(this.formArray);
  }
  createForm(formArray) {
    const type = formArray.type;
    this.form = this.fb.group(this.formTypes[type]);
    // debugger;
  }
  async onSubmit() {
    let formRequest: any;
    if (this.formArray.type === 'contactUs') {
      const { name, email, message } = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
        <div>Message: ${message}</div>
      `;
      formRequest = { name, email, message, date, html };
      this.useContactUs(formRequest).then(() => {
        this.cleanFormOnSuccess();
      });
    } else if (this.formArray.type === 'submit') {
      const { linkTitle, linkImage, linkDescription, linkSource, linkUrl, email, name } = this.form.value;
      const date = Date();
      const html = `
        <div>From: ${name}</div>
        <div>Email: <a href="mailto:${email}">${email}</a></div>
        <div>Date: ${date}</div>
      `;
      formRequest = { name, email, date, html, linkTitle, linkImage, linkDescription, linkSource, linkUrl};
        this.useSubmit(formRequest);
      //   .then(() => {
      // }) ;
    } else if (this.formArray.type === 'suggest') {}
  }

  cleanFormOnSuccess() {
    this.showSuccess = true;
    this.form.reset();
  }

  useContactUs(formRequest): any {
    const url = 'https://us-central1-best-links.cloudfunctions.net/contactUs';
    try {
      return this.sendApiService.post(url, formRequest);
    } catch (err) {
      console.log('Error: ', err.message);
    }
  }

  useSubmit(formRequest) {
    const collectionName = this.router.url.charAt(0) === '/' ? this.router.url.substr(1) : this.router.url; // remove /
    this.fireBaseService.addItem(formRequest, collectionName);
  }
}
