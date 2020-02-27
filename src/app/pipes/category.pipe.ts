import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../interfaces/post';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {
  transform(value: Post[], category: string): Post[] {
    let result: Post[] = [];
    if (value.length === 0) return null;
    for (let post of value) {
      if (post.category === category || category === 'all') {
        result.push(post);
      }
    }
    return result;
  }
}
