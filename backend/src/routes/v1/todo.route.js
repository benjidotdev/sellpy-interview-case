import express from 'express';

import { todoController } from '../../controllers/index.js';

const router = express.Router();

router
  .route('/')
  .post(todoController.createTodo);

export default router;