import { Router } from 'express';
const IndexRoutes = Router();
const userRouter = require('./users/user.router');
IndexRoutes.use('/api/users', userRouter);

export default IndexRoutes;
