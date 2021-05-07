import { Component, OnInit } from '@angular/core';
import {faUser, faUserFriends} from '@fortawesome/free-solid-svg-icons';
import {faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-main-features',
  templateUrl: './main-features.component.html',
  styleUrls: ['./main-features.component.css']
})
export class MainFeaturesComponent implements OnInit {

  faUser = faUser
  faUserFriends = faUserFriends
  constructor() { }

  ngOnInit(): void {
  }

}
