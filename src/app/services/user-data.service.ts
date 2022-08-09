import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor(private httpClient: HttpClient) {}

  public async getUserData(): Promise<User[]> {
    return await lastValueFrom(
      this.httpClient
        .get<User[]>('assets/data/data.json')
    );
  }
}
