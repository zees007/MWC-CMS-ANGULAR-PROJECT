import { Component, OnInit } from '@angular/core';
import {faCircle} from '@fortawesome/free-solid-svg-icons';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-page',
  templateUrl: './service-page.component.html',
  styleUrls: ['./service-page.component.css']
})
export class ServicePageComponent implements OnInit {

  faCircle = faCircle

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

}
