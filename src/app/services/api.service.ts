import { Injectable } from '@angular/core';
import { Post } from '../models/post.model'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  public postsDB = [
    new Post(1,
      'Academia',
      'work',
      'Proyecto que se esta realizando durante la academia',
      'Este proyecto esta siendo creado por Mauricio Alvarado durante su tiempo en la academia',
      '02-13-2020',
      'https://i.picsum.photos/id/0/5616/3744.jpg',
      [{ author: 'Modi', comment: 'Muy buena experiencia' }, { author: 'Carlos', comment: 'Se los recomiendo'}]),
    new Post(2,
      'Proyecto',
      'lifestyle',
      'Proyecto que se esta realizando durante la academia',
      'Este proyecto esta siendo creado por Mauricio Alvarado durante su tiempo en la academia',
      '02-13-2020',
      'https://i.picsum.photos/id/10/2500/1667.jpg',
      [{ author: 'Modi', comment: 'Muy buena experiencia' }, { author: 'Carlos', comment: 'Se los recomiendo'}]),
    new Post(3,
      'Viaja',
      'travel',
      'Proyecto que se esta realizando durante la academia',
      'Este proyecto esta siendo creado por Mauricio Alvarado durante su tiempo en la academia',
      '02-13-2020',
      'https://i.picsum.photos/id/1002/4312/2868.jpg',
      [{ author: 'Modi', comment: 'Muy buena experiencia' }, { author: 'Carlos', comment: 'Se los recomiendo'}]),
    new Post(4,
      'Come saludable',
      'food',
      'Proyecto que se esta realizando durante la academia',
      'Este proyecto esta siendo creado por Mauricio Alvarado durante su tiempo en la academia',
      '02-13-2020',
      'https://i.picsum.photos/id/1000/5626/3635.jpg',
      [{ author: 'Modi', comment: 'Muy buena experiencia' }, { author: 'Carlos', comment: 'Se los recomiendo'}])
  ]; // Simulates API response

  updatePost(updatedPost) {
    this.postsDB.forEach(post => {
      if (post.id === updatedPost.id) {
        Object.assign(post, updatedPost);
      }
    })
  }

  getPost(id) {
    let result;
    this.postsDB.forEach(post => {
      if (post.id === id) {
        result = post;
      }
    })
    return result;
  }

  deletePost(post) {
    let cache = [...this.postsDB];
    let index = cache.indexOf(post);
    if (index > -1) {
      cache.splice(index, 1);
    }
    this.postsDB = [...cache];
  }
}
