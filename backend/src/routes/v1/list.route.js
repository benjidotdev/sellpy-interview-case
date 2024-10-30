import express from 'express';

import { listController } from '../../controllers/index.js';
import { getListTodos } from '../../controllers/list.controller.js'

const router = express.Router();

router
  .route('/')
  .get(listController.getLists)
  .post(listController.createList);

router
  .route('/:id/todos')
  .get(listController.getListTodos)
  .put(listController.saveListTodos);

router
  .route('/:id')
  .get(listController.getList)
  .put(listController.updateList)
  .delete(listController.deleteList);

export default router;