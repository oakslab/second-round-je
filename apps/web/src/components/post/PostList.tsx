import { List, Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CreatePostInput, Post } from "../../types/post";
import { postService } from "../../services/postService";
import { PostItem } from "./PostItem";
import { PostForm } from "./PostForm";

export const PostList = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    const data = await postService.getAllPost();
    setPosts(data);
  };

  const handleAddPost = async (post: CreatePostInput) => {
    const newTodo = await postService.createPost(post);
    setPosts([...posts, newTodo]);
  };

  const handleDelete = async (id: string) => {
    await postService.deletePost(id);
    setPosts(posts.filter((t) => t.id !== id));
  };

  return (
    <Paper sx={{ p: 2 }}>
      <PostForm onSubmit={handleAddPost} />
      <List>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} onDelete={handleDelete} />
        ))}
      </List>
    </Paper>
  );
};
