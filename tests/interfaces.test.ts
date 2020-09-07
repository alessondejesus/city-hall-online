/* interfaces */
interface IGame {
    readonly name: String
    description: String
    getName?: (name: String) => String
}

const dofus: IGame = {
    name: 'Dofus',
    description: 'MMORPG massivo multiplayer',
    getName: (name: String) => name
}

interface ICompany extends IGame{
    similar: IGame
    readonly originalCompany: String
    gender: String
}

const warkfu :ICompany = { 
    name: 'warkfu',
    description: 'MMORPG massivo multiplayer',
    // getName: (name: String) => name,
    similar: dofus,
    originalCompany: 'ankama',
    gender: 'rpg'
}

class CreateGame implements IGame{
    name: String
    description: String

    constructor(name: String, description: String){
        this.name = name
        this.description = description
    }

}
const newGame = new CreateGame('Dofus retro', 'Versao 1.29 do Dofus')



test('return true 4ever', () => {
    expect(newGame.name).toBeInstanceOf(dofus)
})