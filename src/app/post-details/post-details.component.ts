import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private _api: ApiService) { }

  public post: Post;
  public newComment = '';
  public isLoading = true;

  ngOnInit(): void {
    var vm = this;
    this._route.params.subscribe(params => {
      this.getPost(params['id']);
    });
  }

  getPost(id: string) {
    let sub = this._api.getPost(id).subscribe({
      next: data => {
        this.post = data;
        this.isLoading = false;
        sub.unsubscribe();
      },
      error: error => {
        console.error('There was an error!', error);
        sub.unsubscribe();
      }
    })
  }

  addComment() {
    let id = this.post.id;
    this.post.comments.push({
      author: 'John Doe',
      comment: this.newComment
    })
    let sub = this._api.updatePost(this.post, id).subscribe({
      next: data => {
        this.newComment = '';
        sub.unsubscribe();
      },
      error: error => {
        console.error('There was an error!', error);
        sub.unsubscribe();
      }
    });
  }
}
