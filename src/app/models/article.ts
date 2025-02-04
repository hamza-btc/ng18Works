export interface Article {
  id?: number;
  title: string;
  body: string;
  views?: number;
  image: string;
  reaction?: Reaction;
  category: Category;
  author?: string;
}

export interface Reaction {
  likes: number;
  dislikes: number;
}

export interface Category {
  id?: number;
  name: string;
  slug: string;
}
