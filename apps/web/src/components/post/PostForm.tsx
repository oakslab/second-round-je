import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";

import styles from "./PostForm.module.css";

// Define the validation schema
const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.optional(z.string()),
});

type PostFormData = z.infer<typeof postSchema>;

interface Props {
  onSubmit: (post: { title: string; content?: string }) => void;
}

export const PostForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
  });

  const onSubmitForm = (data: PostFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className={styles.form}>
      <TextField
        fullWidth
        {...register("title")}
        error={!!errors.title}
        helperText={errors.title?.message}
        placeholder="title"
      />
      <TextField
        fullWidth
        title="content"
        {...register("content")}
        error={!!errors.content}
        helperText={errors.content?.message}
        placeholder="content"
      />
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
        Add Post
      </Button>
    </form>
  );
};
