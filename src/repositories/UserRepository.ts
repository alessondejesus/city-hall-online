import { IUser } from '../models/User'

/* fake datas */
let fakeNewUser: IUser = {
    id: 'string',
    name: 'string',
    email: 'string',
    password: 'string',
    type: 'string'
}


const UserRepository = () => {
    const createUser = async (user: IUser): Promise<void> => {
        //metodo do banco de dados de criar usuario
    }

    const deleteUser = async (token: string | number): Promise<void> => {
        //metodo do banco de dados de deletar usuario
    }

    const getUserByToken = async (token: string | number): Promise<IUser> => {
        //metodo do banco de dados de resgatar usuario
        return fakeNewUser
    }

    const getUserByLogin = async (email: string, password: string): Promise<IUser> => {
        //metodo do banco de dados de resgatar usuario
        return fakeNewUser
    }

    return {
        createUser,
        deleteUser,
        getUserByToken,
        getUserByLogin
    }
}

export { UserRepository }