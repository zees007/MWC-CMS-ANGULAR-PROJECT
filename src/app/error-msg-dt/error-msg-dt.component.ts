import { Component, OnInit } from '@angular/core';
import {ErrorMsgDTService} from '../../shared/services/error-msg-dt.service';

@Component({
    selector: 'app-error-msg-dt',
  templateUrl: './error-msg-dt.component.html',
  styleUrls: ['./error-msg-dt.component.css']
})
export class ErrorMsgDTComponent implements OnInit {

  public errorMsgDTs: any = [];

  constructor(private errorMsgDTService: ErrorMsgDTService) { }

  ngOnInit(): void {
    this.errorMsgDTService.refreshNeeded.subscribe(() => {
      this.getAllErrorMsgs();
    });

    this.getAllErrorMsgs();
  }

  private getAllErrorMsgs(){
    const resp = this.errorMsgDTService.getAllErrorMsgs();
    resp.subscribe((data) => this.errorMsgDTs = data);
    console.log(resp);
    console.log(this.errorMsgDTs);
  }

}
