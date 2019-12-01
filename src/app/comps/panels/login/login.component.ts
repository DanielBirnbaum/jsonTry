import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public location: LocationService, public router: Router) { }
  user: string
  pass: number
  ngOnInit() {

  }
  login() {
    this.location.locationApp = 'homepage'
    this.router.navigate(['homepage'])
    this.location.logUser = this.user
    this.location.loged = true;
  }

}
