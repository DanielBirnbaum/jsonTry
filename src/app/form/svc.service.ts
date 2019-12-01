import { Injectable } from '@angular/core';
import { NewFormClass } from './NewFormClass';

@Injectable({
  providedIn: 'root'
})
export class SvcService {

  contact:NewFormClass[]=[]

  constructor() { }
}
