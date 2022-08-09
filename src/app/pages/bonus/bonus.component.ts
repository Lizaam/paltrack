import { Component } from '@angular/core';
import { User } from 'src/app/models/data';
import { RandomDataService } from 'src/app/services/random-data.service';

@Component({
  selector: 'app-bonus',
  templateUrl: './bonus.component.html',
  styleUrls: ['./bonus.component.css']
})
export class BonusComponent {
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