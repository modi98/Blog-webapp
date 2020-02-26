import { Injectable } from '@angular/core';
import { Post } from '../models/post.model'
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  addPost(post: Object) {
    return this.http.post<any>('http://localhost:9000/posts', post);
  }

  updatePost(updatedPost: Object, id: string) {
    return this.http.put<any>('http://localhost:9000/posts/' + id, updatedPost);
  }

  getPosts() {
    return this.http.get<any>('http://localhost:9000/posts');
  }

  getPost(id: string) {
    return this.http.get<any>('http://localhost:9000/posts/' + id);
  }

  deletePost(id: string) {
    return this.http.delete<any>('http://localhost:9000/posts/' + id);
  }
}
