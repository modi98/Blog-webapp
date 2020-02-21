import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  posts = [];
  categoryToFilter = 'all';

  constructor(private _api: ApiService) { }

  ngOnInit(): void {
    this.posts = this._api.postsDB;
  }

  filterCategory(category) {
    this.categoryToFilter = category;
  }

  storeNewPost(post) {
    this._api.postsDB = [...this._api.postsDB, post];
    this.posts = this._api.postsDB;
  }

  reloadPosts() {
    this.posts = this._api.postsDB;
  }
}
