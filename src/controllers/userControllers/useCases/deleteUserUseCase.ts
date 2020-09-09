import { Request, Response } from 'express'
import { UserRepository } from '../../../repositories/UserRepository'
const userRepository = UserRepository()

/* fake datas */
let fakeId = 123

const deleteUser = async (req: Request, res: Response) => {
    try {
        userRepository.deleteUser(fakeId)
        res.json({
            message: 'user has been deleted'
        })
    } catch (error) {
        res.status(500).json({ error: error.message || 'Unexpected error.' })
    }
}

export { deleteUser }