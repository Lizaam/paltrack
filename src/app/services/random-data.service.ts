import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class RandomDataService {
  constructor(private httpClient: HttpClient) {}

  public async getRandomData(): Promise<User[]> {
    return await lastValueFrom(
      this.httpClient
        .get<User[]>('assets/data/data.json')
    );
  }
}
