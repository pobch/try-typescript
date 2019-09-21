// ---------------------- Index Types ----------------------------------
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getProperty(555, 'toString'))

// --------- Constraints
interface Printable {
  print(): void
}

function printHousesOrCars(arr: Printable[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

function printHousesOrCars2<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print()
  }
}

class House {
  print(): void {
    console.log('I am a House')
  }
}

class Car {
  random(): void {
    console.log('Some random function')
  }
  print(): void {
    console.log('I am a Car')
  }
}

printHousesOrCars([new House(), new Car()])
printHousesOrCars([new Car(), new Car()])

printHousesOrCars2<House>([new House(), new Car()]) // Why ??
printHousesOrCars2<House>([new Car(), new Car()]) // Why ??
