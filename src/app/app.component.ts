import {Component, OnInit} from '@angular/core';
import {LocationStrategy} from '@angular/common';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mwc-consultancy-client';

  isPopState = false;

  constructor(private locStrat: LocationStrategy, private router: Router) {
  }
  ngOnInit(): void {
    // To overcome this problem when changing router while going to top. Every time I need to scroll to go to top - start
    this.locStrat.onPopState(() => {
      this.isPopState = true;
    });

    this.router.events.subscribe(event => {
      // Scroll to top if accessing a page, not via browser history stack
      if (event instanceof NavigationEnd && !this.isPopState) {
        window.scrollTo(0, 0);
        this.isPopState = false;
      }

      // Ensures that isPopState is reset
      if (event instanceof NavigationEnd) {
        this.isPopState = false;
      }
    });

    // To overcome this problem when changing router while going to top. Every time I need to scroll to go to top - END
  }
}
