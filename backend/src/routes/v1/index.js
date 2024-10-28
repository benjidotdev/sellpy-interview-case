import express from 'express';
import listRoute from './list.route.js';
import todoRoute from './todo.route.js'

const router = express.Router();

const defaultRoutes = [
  {
    path: '/list',
    route: listRoute,
  },
  {
    path: '/todo',
    route: todoRoute,
  }
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;