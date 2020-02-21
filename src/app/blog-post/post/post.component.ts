import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Post } from 'src/app//models/post.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postObject: Post;
  @Output() deleted = new EventEmitter<boolean>()
  post: Post;
  public editingPost = false;

  constructor(private _api: ApiService) {
  }

  ngOnInit(): void {
    this.post = this.postObject;
  }

  goToPost() {
    console.log(this.post.id);
  }

  toggleEditPost() {
    this.editingPost = !this.editingPost
  }

  deletePost() {
    this._api.deletePost(this.post);
    this.deleted.emit(true);
  }
}
