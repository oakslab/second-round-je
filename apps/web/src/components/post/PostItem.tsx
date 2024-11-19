import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import { Post } from "../../types/post";
import React from "react";

interface Props {
  post: Post;
  onDelete: (id: string) => void;
}

export const PostItem = ({ post, onDelete }: Props) => {
  return (
    <ListItem>
      <ListItemText primary={post.title} secondary={post.content} />
      <ListItemSecondaryAction>
        <IconButton edge="end" onClick={() => onDelete(post.id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};
