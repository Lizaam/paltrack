import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  @Input() showMenu: boolean = false;

  constructor(private router: Router) {}

  public showBonusRound(): void {
    if (this.router.url.substring(1) !== 'login') {
      this.router.navigate(['/bonus']);
    }
  }
}
