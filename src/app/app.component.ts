import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'Paltrack Web Application Test';
  public showMenu: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.routeChangeSubscription();
  }

  private routeChangeSubscription(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        const url = event.url.substring(1);

        switch (url) {
          case '':
          case 'login':
            this.showMenu = false;
            break;
          default:
            this.showMenu = true;
            break;
        }
      }
    });
  }
}
