import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  posts = [];
  categoryToFilter = 'all';
  isLoading = true;

  constructor(private _api: ApiService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.isLoading = true;
    let sub = this._api.getPosts().subscribe({
      next: data => {
        this.isLoading = false;
        this.posts = data;
        sub.unsubscribe();
      },
      error: error => {
        console.error('There was an error!', error);
        sub.unsubscribe();
      }
    });
  }

  filterCategory(category: string) {
    this.categoryToFilter = category;
  }

  storeNewPost(post: Post) {
    this.isLoading = true;
    let sub = this._api.addPost(post).subscribe({
      next: data => {
        this.getPosts();
        sub.unsubscribe();
      },
      error: error => {
        console.error('There was an error!', error);
        sub.unsubscribe();
      }
    });
  }

  deletePost(post: Post) {
    this.isLoading = true;
    this.openSnackBar(post);
    let sub = this._api.deletePost(post.id).subscribe({
      next: data => {
        this.getPosts();
        sub.unsubscribe();
      },
      error: error => {
        console.error('There was an error!', error);
        sub.unsubscribe();
      }
    });
  }

  updatePost(post: Post) {
    this.isLoading = true;
    let sub = this._api.updatePost(post, post.id).subscribe({
      next: data => {
        this.getPosts();
        sub.unsubscribe();
      },
      error: error => {
        console.error('There was an error!', error);
        sub.unsubscribe();
      }
    });
  }

  openSnackBar(post: Post) {
    let snackBarRef = this._snackBar.open(`Deleted post: '${post.title}'`, 'Undo', {
      duration: 10000,
    });

    let sub = snackBarRef.onAction().subscribe(() => {
      let addSub = this._api.addPost(post).subscribe({
        next: data => {
          this.getPosts();
          addSub.unsubscribe();
        },
        error: error => {
          console.error('There was an error!', error);
          addSub.unsubscribe();
        }
      });;
      sub.unsubscribe();
    });
  }
}
