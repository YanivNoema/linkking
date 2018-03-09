import {Component, OnInit, Input} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
  @Input() formArray: any;
  form: FormGroup;
  formTypes = {
    contact: {
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    },
    suggest: {},
    submit: {}
  };

  constructor(private fb: FormBuilder) {
    this.createForm(this.formArray);
  }
  createForm(formArray) {
    const type = formArray.type;
    this.form = this.fb.group(this.formTypes[type]);
  }
  onSubmit() {
    const {name, email, message} = this.form.value;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
    // const formRequest = { name, email, message, date, html };
    // this.af.database.list('/messages').push(formRequest);
    this.form.reset();
  }
}
