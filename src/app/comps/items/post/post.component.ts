import { Component, OnInit, Input } from '@angular/core';
import { PostModel } from 'src/app/models/post';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
@Input() post:PostModel
  constructor(public postSvc: PostService) { }

  ngOnInit() {
  }

}
