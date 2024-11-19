export interface Post {
  id: string;
  title: string;
  content?: string;
  createdAt: Date;
  updatedAt?: Date;
}

export interface CreatePostInput {
  title: string;
  content?: string;
}

export interface UpdatePostInput {
  id: string;
  title?: string;
  content?: string;
}
