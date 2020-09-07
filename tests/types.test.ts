/*  types */
type People = {
    id: number
    readonly name: string
    email: string,
    getId?: (id: string) => number
}
type Profession = {
    people: People
    id: number
    name: string
}

/*  INTERSEÇÃO */
type PeopleInfo = People & Profession

let alesson: People = { id: 5, name: 'Áleson de Jesus', email: 'asn90062@hotmail.com' }
let workerPeople: Profession = { people: alesson, id: 555, name: "Developer" }


/* PARTIAL */
type toDo = {
    title: string,
    completed: boolean
}

const myToDo: Readonly<toDo> = {
    title: 'Estudar',
    completed: false
    /* 
        Readonly permite apenas a leitura dos atributos
    */
}

const updateToDo = (todo: toDo, fieldsToUpdate: Partial<toDo>) => {
    return { ...todo, ...fieldsToUpdate }
    /*
        retorna os valores sobreescrevendo
        obs: Partial permite o uso de uma parte parcial do type
    */
}

const newToDo: toDo = updateToDo(myToDo, { completed: true })
/* 
    um novo toDo eh criado sendo do tipo toDo com os valores do myToDo SOBRESCRITOS 
    RETORNA O myToDo COM OS CAMPOS SOBRESCRITOS    
*/

/* PICK - instancia o type selecionando os campos requeridos*/
type toDoPreview = Pick<toDo, "title">
const preview: toDoPreview = {
    title: 'Estudar Vue.JS'
}

/* OMIT - instancia o type omitindo campos*/
type toDoCompletedPreview = Omit<toDo, "title">
const toDoPreview2: toDoCompletedPreview ={
    completed: false
}





test('return true 4ever', () => {
    expect(true).toBe(true)
})

/* Conclusão:
- Bom para uso rapido
- Bom pra quem gosta de usar objetos
- Se quiser adicionar mais propriedades basta extender
*/

//CONCISTENCIA!!!
