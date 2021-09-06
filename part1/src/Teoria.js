
const Teoria = () => {
    // VARIABLES
    console.log('    VARIBLES    ')
    const x = 1
    let y = 5

    console.log (x, y) // 1, 5 es impreso
    y += 10
    console.log (x, y) // 1, 15 es impreso
    y = 'sometext'
    console.log(x, y) // 1, sometext es impreso
    //x = 4 // provoca un error


    // MATRICES
    console.log('    MATRICES    ')
    const t = [1, -1, 3]

    t.push(5)
    console.log(t.length) // Se imprime 4
    console.log(t[1]) // -1 es impreso

    //Una forma de iterar a través de los elementos del array es usar forEach
    t.forEach(value => {
        console.log(value) // se imprimen los números 1, -1, 3, 5, cada uno en la línea propia
    })

    const t2 = t.concat(5)
    console.log(t)  // [1, -1, 3, 5] es impreso
    console.log(t2) // [1, -1, 3, 5, 5] es impreso

    //map crea un nuevo array, para la cual la función dada como parámetro se usa para crear los elementos.
    //En el caso de este ejemplo, el valor original se multiplica por dos.
    const m1 = t.map(value => value * 2)
    console.log(m1) // [2, 4, 6, 10] es impreso

    const [first, second, ...rest] = t2
    console.log(first, second)  // 1, -1 es impreso
    console.log(rest)          // [3, 5 ,5] es impreso


    // OBJETOS
        console.log('    OBJETOS    ')
        const object1 = {
            name: 'Arto Hellas',
            age: 35,
            education: 'PhD',
            }

        const object2 = {
            name: 'Full Stack web application development',
            level: 'intermediate studies',
            size: 5,
        }

        const object3 = {
            name: {
                first: 'Dan',
                last: 'Abramov',
            },
            grades: [2, 3, 5, 3],
            department: 'Stanford University',
        }

        console.log(object1.name)         // se imprime Arto Hellas
        const fieldName = 'age'
        console.log(object1[fieldName])    // 35 es impreso

    return null
}

export default Teoria;