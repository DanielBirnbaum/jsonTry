import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumModel } from '../models/album';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http: HttpClient, public location:LocationService ) { }

  private api = "https://jsonplaceholder.typicode.com/albums?userId="+this.location.id;;

  comment: AlbumModel
  albums: AlbumModel[] = []

  getAlbums() {
   return this.http.get<AlbumModel[]>(this.api)
    console.log(this.albums);
  }
}
