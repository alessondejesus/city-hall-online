import { Router } from 'express'
const router = Router()

router
    .get('/', (req, res) => {
        res.json({ message: 'hello!' })
    })
    .post('/', (req, res) => {
        res.json({ message: 'post endpoint of user' })
    })
    .delete('/', (req, res) => {
        res.json({ message: 'delete endpoint of user, needs token' })
    })
    .put('/', (req, res) => {
        res.json({ message: 'get endpoint of user, needs token' })
    })

export default router