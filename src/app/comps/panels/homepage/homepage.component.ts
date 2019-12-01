import { Component, OnInit, OnDestroy } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';
import { Router } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { PostService } from 'src/app/services/post.service';
import { PhotoModel } from 'src/app/models/photo';
import { PostModel } from 'src/app/models/post';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit,OnDestroy  {
  ngOnDestroy(): void {
    clearInterval(this.intervalNumber)  ;
  }

  constructor(public location: LocationService, public router: Router, public photoSvc: PhotoService, public postSvc: PostService, public commentSvc: CommentService) { }
  photos: PhotoModel[] = []
  posts: PostModel[] = []
  num: number = 0
  numMax: number = 9
  intervalNumber:number

  ngOnInit() {

    this.photoSvc.getLastPhotos().subscribe(item =>{ this.photos = item
    setTimeout(() => this.slider(), )
    this.intervalNumber = window.setInterval(() => this.slider(), 2500)
})
    this.postSvc.getLastPosts().subscribe(item => {
      this.posts = item;
      let postsId:number[] = item.map(itemId => itemId.id);
      console.log(postsId);
      this.commentSvc.getCommentsByPosts(postsId).subscribe(commentsByPosts => {
        this.posts.forEach(element => element.comments = commentsByPosts.filter(lastComments => lastComments.postId == element.id));
               
      })
    })

  }



  slider() {
    let hideLi = document.querySelectorAll('.slid')[this.num]
    hideLi.className = 'slid'
    if (this.num == this.numMax) {
      this.num = -1
    }
    let showLi = document.querySelectorAll('.slid')[++this.num]
    showLi.className = 'slid backIn'

  }
}



