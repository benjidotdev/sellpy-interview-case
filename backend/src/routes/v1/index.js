import express from 'express';
import listRoute from './list.route.js';

const router = express.Router();

const defaultRoutes = [
  {
    path: '/list',
    route: listRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

export default router;