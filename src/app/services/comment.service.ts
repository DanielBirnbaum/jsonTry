import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentModel } from '../models/comment';
import { LocationService } from './location.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient, public location:LocationService ) { }

  private api = "https://jsonplaceholder.typicode.com/comments?postId="+this.location.id;

  comment: CommentModel
  comments: CommentModel[] = []

  getComments() {
   return this.http.get<CommentModel[]>(this.api)
    console.log(this.comments);
  }

  getCommentsByPosts(postId){
    let lastComments="https://jsonplaceholder.typicode.com/comments?"  
    for (let i = 0; i < postId.length; i++) {
      lastComments+=`postId=${postId[i]}&` 
    }
    return this.http.get<CommentModel[]>(lastComments)
  }
}
