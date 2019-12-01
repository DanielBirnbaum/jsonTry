import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  locationApp: string = 'login'
  location: string = 'users';
  id: number;
  logUser: string;
  loged = false;
  constructor() { }
} 
