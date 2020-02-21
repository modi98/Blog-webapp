import { Post } from "./post.model";

describe('Post', () => {
  it('should create an instance', () => {
    expect(new Post(1, 'Academia', 'work', 'Proyecto que se esta realizando durante la academia', 'Este proyecto esta siendo creado por Mauricio Alvarado durante su tiempo en la academia', '02-13-2020', 'https://i.picsum.photos/id/0/5616/3744.jpg', [])).toBeTruthy();
  });
});
