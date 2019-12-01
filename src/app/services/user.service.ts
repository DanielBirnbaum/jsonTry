import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private api = "https://jsonplaceholder.typicode.com/users";

  user: UserModel
  users: UserModel[] = []
  print

  getUsers() {
    return this.http.get<UserModel[]>(this.api)
    console.log(this.users);
    
    
  }

}
