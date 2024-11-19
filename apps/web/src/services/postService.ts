import { CreatePostInput, Post } from "../types/post";

const API_URL = "http://localhost:3001/api";

export const postService = {
  async getAllPost(): Promise<Post[]> {
    const response = await fetch(`${API_URL}/posts`);
    return (await response.json()) as Post[];
  },

  async createPost(post: CreatePostInput): Promise<Post> {
    const response = await fetch(`${API_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });
    return (await response.json()) as Post;
  },

  async deletePost(id: string): Promise<void> {
    await fetch(`${API_URL}/posts/${id}`, {
      method: "DELETE",
    });
  },
};
