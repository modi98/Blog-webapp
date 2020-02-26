export interface Post {
  id: string,
  title: string,
  shortDescription: string,
  description: string,
  image: string,
  comments: {author: string, comment: string}[],
  createdAt: string,
  updatedAt: string
}
