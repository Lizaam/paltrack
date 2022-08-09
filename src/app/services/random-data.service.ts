import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, timeout } from 'rxjs';
import { User } from '../models/data';

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
