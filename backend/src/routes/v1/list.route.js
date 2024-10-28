import express from 'express';

import { listController } from '../../controllers/index.js';

const router = express.Router();

router
  .route('/')
  .get(listController.getLists);

export default router;