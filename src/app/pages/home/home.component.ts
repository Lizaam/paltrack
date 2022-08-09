import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserDataService } from 'src/app/services/user-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private userDataService: UserDataService
  ) { }

  ngOnInit(): void {
    this.initializeHomeRequests();
  }

  private async initializeHomeRequests(): Promise<void> {
    try {
      this.users = await this.userDataService.getUserData();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
