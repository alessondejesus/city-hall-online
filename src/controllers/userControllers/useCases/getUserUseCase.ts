import { Request, Response } from 'express'
import { UserRepository } from '../../../repositories/UserRepository'
const userRepository = UserRepository()

/* fake datas */
const fakeData: object = {
    name: 'ale',
    avatarUrl: 'https://s3.naotenho.com',
    age: 20,
}
const  fakePassword = '123456'
const  fakeEmail = 'lesson9006@gmail.com'
const  fakeTOken = '12$32#@123'

const getUserByToken = async (req: Request, res: Response) => {
    try {
        const result = await userRepository.getUserByToken(fakeTOken)
        if (!result) {
            throw new Error('unauthorized')
        }
        res.json({ fakeData })
    } catch (error) {
        res.status(500).json({ error: error.message || 'Unexpected error.' })
    }
}

const getUserByLogin = async (req: Request, res: Response) => {
    try {
        const result = await userRepository.getUserByLogin(fakeEmail, fakePassword)
        if (!result) {
            throw new Error('unauthorized')
        }
        res.json({ fakeData })
    } catch (error) {
        res.status(500).json({ error: error.message || 'Unexpected error.' })
    }
}

export { getUserByLogin, getUserByToken }