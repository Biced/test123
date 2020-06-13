import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myStoreApp';
  routeLoading: boolean;
  constructor(
    private router: Router
  ) { }
  ngOnInit() {
    // loading = true;
    this.router.events.subscribe(
      event => {
        if (event instanceof NavigationStart) {
          this.routeLoading = true;
          window.scrollTo(0, 0);
        }

        if (event instanceof NavigationEnd) {
          this.routeLoading = false;
        }
      });
  }
}

