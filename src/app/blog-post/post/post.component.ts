import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Post } from 'src/app//models/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postObject: Post;
  @Output() deleted = new EventEmitter<Post>()
  @Output() undo = new EventEmitter<Post>()
  post: Post;
  public editingPost = false;

  constructor() {
  }

  ngOnInit(): void {
    this.post = this.postObject;
  }

  toggleEditPost() {
    this.editingPost = !this.editingPost
  }

  deletePost() {
    this.deleted.emit(this.post);
  }
}
