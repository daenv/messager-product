import { Request, Response } from "express";

export const registers = async (req: Request, res: Response) => {
  try {
     return res.status(200).json({'test': 'test'})
  } catch (error) {
     throw error;
  }
}