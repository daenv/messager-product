import { Request, Response, NextFunction } from 'express';
import * as userServices from '../../services/users/user.service';
import { Code } from '../../constants/enum/code.enum';
import { HttpResponse } from '../../domains/response';
import { Status } from '../../constants/enum/httpStatus.enum';

export const registers = async (req: Request, res: Response, next: NextFunction) => {
   try {
      res.status(Code.SUCCESS).send(new HttpResponse(Code.SUCCESS, Status.SUCCESS, 'Register successfully'));
   } catch (error) {
      console.log(error);
      next(error);
   }
};
