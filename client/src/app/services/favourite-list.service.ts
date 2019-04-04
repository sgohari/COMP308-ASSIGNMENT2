import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FavouriteListService {
  private user: User;
  private endpoint = 'http://localhost:3000/api/favourite-list/';

  constructor() { }
}
