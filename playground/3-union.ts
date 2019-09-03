let pob: { lastName: string; age: boolean } | { address: string; age: number }
// If there is not variable assignment, we can use only intersect properties
// between these 2 union types, `age` in this case, although `age`s in these 2 union types are boolean vs number
pob.address
pob.lastName
pob.age // error at run time bcoz `pob` is undefined at this moment

// If there is variable assignment, we can use all properties of that type
pob = {
  lastName: 'pob',
  age: false
}
pob.lastName
pob.age
pob.address

// ------------------------------------------------------------------------------------------

let topson: { name: string; age: number }

topson = { name: 'topson', age: 24 }
// If there is not variable assignment above, the next line will be an run-time error
// which is not detectable by TS
console.log(topson.name)
