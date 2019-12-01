import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit { 

  constructor(public albumSvc:AlbumService,public location:LocationService) { }

  ngOnInit() {
    this.albumSvc.getAlbums().subscribe(items => { this.albumSvc.albums = items })
  }

}

