import { Router } from 'express'
import { verifyToken } from '../../controllers/middlewares/verifyToken'
import * as User from '../../controllers/userControllers/'
const router = Router()

router
    .get('/', User.getUserByLogin)

    .post('/', User.deleteUser)

    .delete('/', verifyToken, User.deleteUser)

    .put('/', verifyToken, (req, res) => {
        res.json({ message: 'not implemented' })
    })

export { router }