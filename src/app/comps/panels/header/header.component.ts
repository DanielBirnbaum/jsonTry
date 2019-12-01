import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LocationService } from 'src/app/services/location.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public selectedUser:number
  constructor(public router: Router, public location: LocationService,public userSvc:UserService) { }

  ngOnInit() {
    this.userSvc.getUsers().subscribe(items => { this.userSvc.users = items  })
  }

}
