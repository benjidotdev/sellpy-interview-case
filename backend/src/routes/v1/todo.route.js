import express from 'express'

import { todoController } from '../../controllers/index.js'

const router = express.Router()

router.route('/:id').delete(todoController.deleteTodo)

export default router
