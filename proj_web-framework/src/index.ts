import { Model } from './models/Model'
import { Attributes } from './models/Attributes'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

const user = new Model<UserProps>(new Attributes({ name: 'Pob', age: 55 }))
