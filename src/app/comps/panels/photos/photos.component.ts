import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  constructor(public photoSvc:PhotoService) { }

  ngOnInit() {
    this.photoSvc.getPhotos().subscribe(items => { this.photoSvc.photos = items })
  }

}
