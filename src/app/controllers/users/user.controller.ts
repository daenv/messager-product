import { Request, Response, NextFunction } from 'express';
import * as userServices from '../../services/users/user.service';

export const registers = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const userRegister = await userServices.register(req.body);
      res.status(201).json(userRegister);
   } catch (error) {
      console.log(error);
      next(error);
   }
};
