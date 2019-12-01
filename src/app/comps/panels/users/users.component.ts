import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userSvc: UserService) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(items => { this.userSvc.users = items  })
    console.log(this.userSvc.users);
    
  }

  

}
