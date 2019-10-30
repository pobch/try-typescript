import 'reflect-metadata' // add global variable: Reflect

// Simple example
const plane = {
  color: 'red',
  height: 200
}

Reflect.defineMetadata('objectMeta', 'hi there~!', plane)
Reflect.defineMetadata('propMeta', 'ho ho ho~!', plane, 'height')

console.log(Reflect.getMetadata('objectMeta', plane))
console.log(Reflect.getMetadata('propMeta', plane, 'height'))
console.log('----------------------------')

// How to use with decorator and class
@controller
class Boat {
  color: string = 'blue'

  @get('/test')
  sink(): void {
    console.log('This boat is sinking')
  }
}

function get(path: string) {
  return function(
    target: Boat /** prototype of Boat */,
    key: string,
    desc: PropertyDescriptor
  ): void {
    Reflect.defineMetadata('path', path, target, key)
    console.log('this is @get')
  }
}

// Decorator of the class itself will trigger last
function controller(target: typeof Boat /** constructor function of Boat */): void {
  for (let key in target.prototype) {
    const path = Reflect.getMetadata('path', target.prototype, key)

    if (path) {
      console.log('@controller received path:', path)
    }
  }
}

// Note: Decorators run when classes are defined. Therefore, we don't need to instantiate the classes.
