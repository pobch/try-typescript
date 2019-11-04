import { Model } from './Model'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

// Try composition
export class User {
  constructor(public model: Model<UserProps>) {}

  randomAge(): void {
    let age = this.model.get('age')

    if (!age) {
      age = Math.round(Math.random() * 50)
    } else {
      age = age * -1
    }
    this.model.set({ age })
  }
}
