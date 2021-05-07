import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';
import {Contact} from '../models/Contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http: HttpClient) {
    this.http = http;
  }

  // Contact Us form queries
  contactUsMessage(input: any) {
    return this.http.post('https://mailthis.to/mwashid@mwc-consultancy.com', input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

// CallBack queries
  CallBackMessage(input: any) {
    return this.http.post('https://mailthis.to/contact@mwc-consultancy.com', input, {responseType: 'text'}).pipe(
      map(
        (response) => {
          if (response) {
            return response;
          }
        },
        (error: any) => {
          return error;
        }
      )
    );
  }

}
