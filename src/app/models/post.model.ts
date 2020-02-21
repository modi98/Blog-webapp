export class Post {
  id: number; // Optional parameters
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  publishedAt: string;
  image: string;
  comments: [{
    author: string,
    comment: string
  }];

  constructor(id: number, title: string, category: string, shortDescription: string, description: string, publishedAt: string, image: string, comments: any) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.shortDescription = shortDescription;
    this.description = description;
    this.publishedAt = publishedAt;
    this.image = image;
    this.comments = comments;
  }
}
