const jwt = require('jsonwebtoken');
import { Request, Response, NextFunction } from 'express';

declare global {
   namespace Express {
      interface Request {
         user?: any;
      }
   }
}

export const authCheck = (req: Request, res: Response, next: NextFunction) => {
   if (req.headers.authorization?.startsWith('Bearer')) {
      let token: string = req.headers.authorization.split(' ')[1];
      let secrect = process.env.SECRET_KEY || 'secret-key';
      try {
         if (token) {
            let decoded = jwt.verify(token, secrect) as { id: string };
            req.user = decoded;
            next();
         }
      } catch (error) {
         res.status(401).json({ message: 'Unauthorized' });
      }
   } else {
      throw new Error('There is no token attached to header');
   }
};
