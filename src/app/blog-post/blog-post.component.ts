import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../models/post.model';
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit, OnDestroy {

  posts = [];
  categoryToFilter = 'all';
  sub: Subscription;

  constructor(private _api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.sub = this._api.ob.subscribe((posts) => {
      this.posts = [...posts];
      console.log('Observable changed');
    })
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  filterCategory(category: string) {
    this.categoryToFilter = category;
  }

  storeNewPost(post: Post) {
    this._api.addPost(post);
  }

  deletePost(post: Post) {
    this.openSnackBar(post.title);
    this._api.deletePost(post);
  }

  openSnackBar(title: string) {
    let oldPosts = this.posts;
    let snackBarRef = this._snackBar.open(`Deleted post: '${title}'`, 'Undo', {
      duration: 10000,
    });

    let sub = snackBarRef.onAction().subscribe(() => {
      this._api.updateAllPosts(oldPosts);
      sub.unsubscribe();
    });
  }
}
