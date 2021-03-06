import { Component, OnInit } from '@angular/core';
import { CommentService } from 'src/app/services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(public commentSvc:CommentService) { }

  ngOnInit() {
    this.commentSvc.getComments().subscribe(items => { this.commentSvc.comments = items })
  }

}
