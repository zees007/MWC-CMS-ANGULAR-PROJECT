import { Component, OnInit } from '@angular/core';
import {Contact} from '../../shared/models/Contact.model';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ContactService} from '../../shared/services/contact.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

   contactForm: FormGroup;
   contact: Contact = new Contact('', '', '', '');

  ngOnInit(): void {
  }

  constructor( private fb: FormBuilder, private contactService: ContactService,  private snackBar: MatSnackBar) {
    this.contactForm = this.fb.group({
      message: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      subject: new FormControl('', Validators.required)
    });
  }



  onSubmitContactForm(formData) {
    console.log(formData)
    this.contactService.contactUsMessage(formData)
      .subscribe(response => {
        this.snackBar.open('We will get back you soon..!!', 'Got it :)');
        location.href = 'https://mailthis.to/confirm'
        console.log(response);
      }, error => {
        console.warn(error.responseText)
        console.log({ error });
        this.snackBar.open('Something is breaking. Please call on +974 4423 1155', 'Got it :)');
      });
    this.contactForm.reset();
  }

}
