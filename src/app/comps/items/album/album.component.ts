import { Component, OnInit, Input } from '@angular/core';
import { AlbumModel } from 'src/app/models/album';
import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
@Input()album:AlbumModel
  constructor(public albumSvc:AlbumService) { }

  ngOnInit() {
  }

}
