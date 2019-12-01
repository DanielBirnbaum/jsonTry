import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  
  constructor(public postSvc: PostService,public location:LocationService) { }


  ngOnInit() {
    this.postSvc.getPosts().subscribe(items => { this.postSvc.posts = items  })
    
  }
  selectPost(comments,post){
    this.location.location=comments
    this.location.id=post.id
 console.log(this.location.id,post);



  }

}
