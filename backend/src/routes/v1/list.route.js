import express from 'express'

import { listController } from '../../controllers/index.js'

const router = express.Router()

router.route('/').get(listController.getLists)

router.route('/:id/todos').get(listController.getListTodos).put(listController.saveListTodos)

export default router
