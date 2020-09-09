interface IUser {
    id?: string
    name: string
    email: string
    password: string
    type: string
}


/*
e se eu quiser que os
novos usuarios agora podem ser admins??
*/
interface IUser {
    poder?: string
}

export { IUser }