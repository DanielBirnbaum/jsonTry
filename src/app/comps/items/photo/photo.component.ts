import { Component, OnInit, Input } from '@angular/core';
import { PhotoModel } from 'src/app/models/photo';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(public photoSvc:PhotoService) { }
  @Input() photo:PhotoModel
  ngOnInit() {
  }

}
