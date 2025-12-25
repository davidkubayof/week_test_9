import express from 'express'
import { createUser , buyTickets , getSummary } from '../controllers/userC.js';
import { valid } from '../middleware/middlewareUser.js'

const router = express.Router();

router.post('/register', createUser)
//admin
router.post('/tickets/buy', valid , buyTickets)
router.get('/:username/summary', getSummary)
export default router;