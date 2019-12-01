import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoModel } from '../models/todo';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient, public location:LocationService) { }

  private api = "https://jsonplaceholder.typicode.com/todos?userId="+this.location.id;

  todo: TodoModel
  todos: TodoModel[] = []

  getTodos() {
   return this.http.get<TodoModel[]>(this.api)
    console.log(this.todos);
  }
}
