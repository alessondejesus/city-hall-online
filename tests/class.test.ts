class UserAccount {
    private name: String
    private email: String

    constructor(name: String, email: String) {
        this.name = name
        this.email = email
    }

    getName = () => this.name
    getEmail = () => this.email

    setName = (name: String) => this.name = name 
    setEmail = (email: String) => this.email = email 

    getUserInfo = () => {
        return {
            name: this.name,
            email: this.email
        }
    }
}

class CharAccount extends UserAccount {
    private nickName: String
    private level: number

    constructor(name: String, email: String, nickName: String, level: number) {
        super(name, email)
        this.nickName = nickName
        this.level = level
    }

}

let alezim = new UserAccount('Alesson de Jesus', 'asn9006@hotmail.com')

/* herança */
let alezimNewPlayer = new CharAccount('Alesson de Jesus', 'lesson9006@gmail.com', 'Asn', 200)



test('return true 4ever', () => {
    expect(true).toBe(true);
})