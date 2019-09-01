interface Pop {
  name: string
  age: number
}

const pobja = {
  color: 'yellow',
  money: 200,
  name: 'Pob',
  age: 25
}

// Cannot contain more properties than defined in `Pop` interface
const pop: Pop = {
  // color: 'black',
  name: 'Pop',
  age: 18
}

// `item` argument can contain more properties than defined in `Pop` interface
const printSomething = (item: Pop): void => {
  console.log(item.age)
}

printSomething(pobja)
printSomething(pop)
