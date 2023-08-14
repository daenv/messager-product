import { Router } from 'express';
const routes = Router();
routes.use('/api/users', require('./users/user.router'));

module.exports = routes;
