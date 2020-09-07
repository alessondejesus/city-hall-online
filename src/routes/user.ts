import { Router } from 'express'
const router = Router()

router
    .get('/', (req, res) => {
        type UserInfo = {
            id: number
            name: string
            email: string
        }
        type ProfessionInfo = {
            accountUser: UserInfo
            id: number
            name: string
        }
        let account: UserInfo = { id: 5, name: 'Áleson de Jesus', email: 'asn90062@hotmail.com' }
        let char: ProfessionInfo = { accountUser: account, id: 555, name: "Developer" }
        res.json({ account, char })
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