import { Router } from 'express'
import { router as user } from './userRoutes/user'

const router = Router()

router.use('/user', user)
export default router