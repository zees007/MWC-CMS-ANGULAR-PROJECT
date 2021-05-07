import { Component, OnInit } from '@angular/core';
import {faPaperPlane, faPhone, faSearch, faVoicemail, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import {NgForm} from '@angular/forms';
import {ContactService} from '../../shared/services/contact.service';
import {Contact} from '../../shared/models/Contact.model';
import {CallBack} from '../../shared/models/CallBack.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faPaperPlane = faPaperPlane;
  faPhone = faPhone;
  faEnvelopeOpen = faEnvelopeOpen

  // Social Media Icons
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  faLinkedin = faLinkedin;

  callback: CallBack = new CallBack('', '', '');
  constructor(private dialog: MatDialog, private snackBar: MatSnackBar, private contactService: ContactService) {

  }

  ngOnInit(): void {
  }


  onSubmitCallbackForm(callbackItem: NgForm) {
    if (callbackItem.value) {
      console.log(callbackItem)
      this.contactService.CallBackMessage(callbackItem.value)
        .subscribe(response => {
          this.snackBar.open('We will get back you soon..!!', 'Got it :)');
          location.href = 'https://mailthis.to/confirm';
          // location.href = 'http://localhost:4200/home';
          console.log(response);
        }, error => {
          console.warn(error.responseText)
          console.log({error});
        });
    }
    callbackItem.resetForm();
  }
}
