import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  constructor(public todoSvc: TodoService) { }

  ngOnInit() {    
    this.todoSvc.getTodos().subscribe(items => { this.todoSvc.todos = items })
    console.log(this.todoSvc.todos);
    
  }

}
