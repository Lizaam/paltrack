import { Component } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent {
  public users: User[] = [];

  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.initializeBonusRequests();
  }

  private async initializeBonusRequests(): Promise<void> {
    try {
      this.users = await this.userDataService.getUserData();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
