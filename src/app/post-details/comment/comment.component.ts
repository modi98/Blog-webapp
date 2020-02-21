import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() commentObject: any;
  comment = {
    author: '',
    comment: ''
  }

  constructor() { }

  ngOnInit(): void {
    this.comment = this.commentObject;
  }
}
