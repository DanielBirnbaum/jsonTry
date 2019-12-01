import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PhotoModel } from '../models/photo';
import { LocationService } from './location.service';
import { PostModel } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient, public location: LocationService) { }

  private api = "https://jsonplaceholder.typicode.com/photos?albumId=" + this.location.id;;

  todo: PhotoModel
  photos: PhotoModel[] = []

  getPhotos() {
    return this.http.get<PhotoModel[]>(this.api)
    console.log(this.photos);
  }
  getLastPhotos() {
    let lastPhotos = "https://jsonplaceholder.typicode.com/photos?"
    for (let i = 4991; i <= 5000; i++) {
      lastPhotos += `id=${i}&`
    }
    return this.http.get<PhotoModel[]>(lastPhotos)
  }

}
