import { Router } from "express";
import { createPost, getAllPosts, getPost } from "./post.controller";

const router = Router();

router.post("/", createPost);
router.get("/", getAllPosts);
router.get("/:id", getPost);

export default router;
