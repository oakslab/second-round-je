import { NextFunction, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title, content } = req.body;

    // artificial delay to simulate slow network
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    res.json(post);
  } catch (e) {
    next(e);
  }
};

export const getAllPosts = async (
  _: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
      },
    });

    res.json(posts);
  } catch (e) {
    next(e);
  }
};

export const getPost = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;

    const post = await prisma.post.findUnique({
      where: { id: Number(id) },
    });

    res.json(post);
  } catch (e) {
    next(e);
  }
};
