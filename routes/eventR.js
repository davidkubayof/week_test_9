import express from 'express'

import { valid } from '../middleware/middlewareUser.js'
import { createEvent } from '../controllers/eventC.js';

const router = express.Router();
//user
router.post('/creator', valid , createEvent )

export default router;