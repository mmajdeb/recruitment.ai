import { Request, Response } from "express";
import posts from "../data/posts";

export const getPosts = (req: Request, res: Response) => {
  res.json(posts);
};
