class Boat {
  @instancePropDecorator
  color: string = 'blue'

  get formattedColor(): string {
    return `This boats color is ${this.color}`
  }

  @methodDecorator
  pilot(): void {
    console.log('Go go gooo!')
  }
}

function methodDecorator(target: any, key: string, desc: PropertyDescriptor): void {
  console.log(target)
  console.log(key)
  console.log(desc)
}

// Decorator for instance's property cannot have the third argument like a decorator for class' method
function instancePropDecorator(target: any, key: string): void {
  console.log(target)
  console.log(key)
}
