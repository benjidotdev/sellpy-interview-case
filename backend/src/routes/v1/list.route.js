import express from 'express';

import { listController } from '../../controllers/index.js';

const router = express.Router();

router
  .route('/')
  .get(listController.getLists)
  .post(listController.createList);

router
  .route('/:id')
  .get(listController.getList);

export default router;