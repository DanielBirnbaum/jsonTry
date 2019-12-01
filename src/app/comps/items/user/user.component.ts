import { Component, OnInit, Input } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() user:UserModel
  constructor(public userSvc: UserService,public location:LocationService) { }

  ngOnInit() {
  }
  showButton(){
    // document.querySelector(".list").className('showhim list')
  }
  getlocation(location,userId ){
this.location.location=location;
this.location.id=userId;
console.log(location,userId,this.userSvc.users);

  }
}
