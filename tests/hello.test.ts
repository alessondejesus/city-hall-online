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
console.log(char)

function sum(a:number, b:number) {
    return a + b;
}
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});