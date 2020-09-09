import { Request, Response } from 'express'
import { UserRepository } from '../../../repositories/UserRepository'
import { IUser } from '../../../models/User'
const userRepository = UserRepository()

/* fakes data */
let fakeToken: string = '$ldaskm42r'
let fakeNewUser: IUser = {
    id: 'string',
    name: 'string',
    email: 'string',
    password: 'string',
    type: 'string'
}

const createUser = async (req: Request, res: Response) => {
    try {
        await userRepository.createUser(fakeNewUser)
        res.status(201).json({ message: 'user has been created', fakeToken })
    } catch (error) {
        res.status(500).json({ error: error.message || 'Unexpected error.' })
    }
}

export { createUser }