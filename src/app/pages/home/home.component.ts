import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { RandomDataService } from 'src/app/services/random-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public users: User[] = [];

  constructor(
    private randomDataService: RandomDataService
  ) { }

  ngOnInit(): void {
    this.initializeHomeRequests();
  }

  private async initializeHomeRequests(): Promise<void> {
    try {
      this.users = await this.randomDataService.getRandomData();
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
