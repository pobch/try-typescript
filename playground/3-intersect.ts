let pob: { lastName: string; age: boolean } | { address: string; age: number }

// If there is not variable assignment, we can use only an intersect property,
// i.e. `age`, even `age` is not the same type (boolean vs number)
pob.address
pob.lastName
pob.age // error bcoz `pob` is undefined at this moment

// If there is variable assignment, we can use all properties of that type
pob = {
  lastName: 'pob',
  age: false
}
pob.lastName
pob.age
pob.address

// ------------------------------------------------
let topson: { name: string; age: number }

topson = { name: 'topson', age: 24 }
// If there is not variable assignment above, the next line will be error
// which is not detectable by TS
console.log(topson.name)
