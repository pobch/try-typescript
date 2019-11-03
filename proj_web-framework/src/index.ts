import { Model } from './models/Model'
import { Attributes } from './models/Attributes'
import { Eventing } from './models/Eventing'
import { ApiSync } from './models/ApiSync'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

const API_URL = 'http://localhost:3000/users'

const user = new Model<UserProps>(
  new Attributes<UserProps>({ name: 'Pob', age: 55 }),
  new Eventing(),
  new ApiSync<UserProps>(API_URL)
)

console.log(user)
