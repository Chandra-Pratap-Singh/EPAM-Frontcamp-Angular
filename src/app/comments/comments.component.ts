import { Component, OnInit } from '@angular/core';
import { CommentsService } from '../comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  constructor(private commentsSource: CommentsService) { }
  comments:{content:string,author:string,date:string,likes:number,dislikes:number}[];
  ngOnInit() {
    this.comments=this.commentsSource.comments;
  }


}
