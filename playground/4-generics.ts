// ---------------------- Index Types ----------------------------------
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

console.log(getProperty(555, 'toString'))
