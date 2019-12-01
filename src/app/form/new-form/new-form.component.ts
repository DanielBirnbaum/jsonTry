import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SvcService } from '../svc.service';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  contact = new FormGroup({
    name:new FormControl(' '),
    phone:new FormControl(' '),
    text:new FormControl(' '),
    whatsapp:new FormControl(' ')
  })

  name = new FormControl(' ');
  phone = new FormControl(' ');

  blablagmail = new FormControl()

  newRows: {}[] = []

  constructor(public formSvc:SvcService) { }


  ngOnInit() {
  }


  addRow() {
    this.newRows.push({
      name: this.name.value,
      phone: this.phone.value
    })
  }

  chengeEmail(){
this.blablagmail.setValue('blabla')
  }

  addToContacts(){
    const contactus:NewFormComponent = this.contact.value
    // if (contactus)
  }
}
