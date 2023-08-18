require('dotenv').config();

import express, { Request, Response } from 'express';
import logger from 'morgan';
import * as bodyParser from 'body-parser';
import cors from 'cors';

/**
 * Create and configure ExpressJS web server
 */

class App {
   public express: express.Application;
   constructor() {
      this.express = express();
      this.middleware();
      this.routes();
   }

   private middleware(): void {
      this.express.use(logger('dev'));
      this.express.use(bodyParser.json());
      this.express.use(bodyParser.urlencoded({ extended: false }));
      this.express.use(cors({ origin: 'http://localhost:4200' }));
   }

   private routes(): void {
      // This function will change when we start to add more API endpoints
      let router = express.Router();
      // placeholder route handler
      router.get('/', (req: Request, res: Response) => {
         res.json({
            message: 'Hello World!',
         });
      });
   }
}

export default new App().express;
