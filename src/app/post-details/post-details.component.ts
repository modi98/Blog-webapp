import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _api: ApiService) { }

  public post: Post;
  public newComment = '';
  private _id: number;
  private _sub: any;

  ngOnInit(): void {
    var vm = this;
    this._sub = this._route.params.subscribe(params => {
      this._id = +params['id'];
      this.post = this._api.getPost(this._id);
    });
  }

  addComment() {
    let c = {
      author: 'John Doe',
      comment: this.newComment
    };
    this.post.comments = [...this.post.comments, c];
    this._api.updatePost(this.post);
    this.newComment = '';
  }
}
