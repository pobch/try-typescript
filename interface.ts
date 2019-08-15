interface Pob {
  name: string
  age: number
}

const pobja = {
  color: 'yellow',
  money: 200,
  name: 'Pob',
  age: 25
}

// Cannot contain more properties than defined in `Pob` interface
const popja: Pob = {
  //   color: 'black',
  name: 'Pop',
  age: 18
  //   car: false
}

// `item` argument can contain more properties than defined in `Pob` interface
const printSomething = (item: Pob): void => {
  console.log(item)
}

printSomething(pobja)
printSomething(popja)
