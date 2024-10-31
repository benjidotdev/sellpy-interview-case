import express from 'express'

import { todoController } from '../../controllers/index.js'

const router = express.Router()

router.route('/').delete(todoController.deleteTodo)

export default router
