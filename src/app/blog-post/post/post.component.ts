import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Post } from 'src/app/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postObject: Post;
  @Output() deleted = new EventEmitter<Object>();
  @Output() undo = new EventEmitter<any>();
  @Output() update = new EventEmitter<any>();
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

  sendUpdate(post) {
    this.update.emit(post);
  }
}
