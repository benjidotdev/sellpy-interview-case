import express from 'express';

import { listController } from '../../controllers/index.js';

const router = express.Router();

router
  .route('/')
  .get(listController.getLists)
  .post(listController.createList);

export default router;