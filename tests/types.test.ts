/*  types */
type People = {
    id: number
    readonly name: string
    email: string
}
type Profession = {
    people: People
    id: number
    name: string
}


/*  interseção */
type PeopleInfo = People & Profession

let alesson: People = { id: 5, name: 'Áleson de Jesus', email: 'asn90062@hotmail.com' }
let workerPeople: Profession = { people: alesson, id: 555, name: "Developer" }


test('return true 4ever', () => {
    expect(true).toBe(true);
})

/* Conclusão: 
- Bom para uso rapido
- Bom pra quem gosta de usar objetos
*/

//CONCISTENCIA!!!