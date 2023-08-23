import { Request, Response, NextFunction } from 'express';
import * as userServices from '../../services/users/user.service';
import { Code } from '../../constants/enum/code.enum';
import { HttpResponseImp } from '../../constants/domains/response';
import { HttpResponse } from '../../models/httpResponses/httpResponse.interface';
import { Status } from '../../constants/enum/httpStatus.enum';

export const registers = async (req: Request, res: Response, next: NextFunction) => {
   try {
      const httpRes: HttpResponse = await userServices.register(req.body);
      let data: Object = JSON.parse(JSON.stringify(httpRes.data));

      res.status(Code.SUCCESS).send(new HttpResponseImp(httpRes.statusCode, httpRes.status, httpRes.message , httpRes.timeStamp,data));
   } catch (error) {
      console.log(error);
      next(error);
   }
};
