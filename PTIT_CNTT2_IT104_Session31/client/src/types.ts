export type PostStatus = "draft" | "published" | "blocked";

export interface Post {
  id?: number;
  title: string;
  image: string;
  content: string;
  date: string;    
  status: PostStatus;
}
