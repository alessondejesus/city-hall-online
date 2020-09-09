interface humano {
    nome: string
    idade: number
    power: string
    pegarPoder() : undefined | string
}

interface Superhuman extends humano{
    poder: string
}

let Alezin: Superhuman = {
    poder: 'nada',
    nome: 'alezim',
    idade: 20,
    power: 'invisible',
    pegarPoder(){
        return undefined
    }
}

let alessonSuperHero: humano = {
    nome: 'alezim',
    idade: 20,
    power: 'invisible',
    pegarPoder(){
        return undefined
    }
}

function hello({ nome, idade,  }: humano) {
    let newName = nome
    try {
        const setName = (nome: string) => newName = nome
        const getname = () => {
            return newName
        }
        return {
            getname,
            setName
        }
    } catch{
        throw new Error("unspected error");

    }
}
const alesupremo = hello(alessonSuperHero)


interface IUser {
    id?: string
    name: string
    email: string
    password: string
    type: string
}

test('return true 4ever', () => {
    expect(true).toBe(true)
})