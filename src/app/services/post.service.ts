import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostModel } from '../models/post';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient, public location:LocationService ) { }

  private api = "https://jsonplaceholder.typicode.com/posts?userId="+this.location.id;

  post: PostModel
  posts: PostModel[] = []

  getPosts() {
   return this.http.get<PostModel[]>(this.api)
  }
  getLastPosts(){
    let lastPosts="https://jsonplaceholder.typicode.com/posts?"
    for (let i = 91; i <= 100; i++) {
      lastPosts+=`id=${i}&` 
    }
    console.log(lastPosts);
    
    return this.http.get<PostModel[]>(lastPosts)
  }
}
