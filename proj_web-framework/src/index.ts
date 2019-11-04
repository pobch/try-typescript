import { Model } from './models/Model'
import { Attributes } from './models/Attributes'
import { Eventing } from './models/Eventing'
import { ApiSync } from './models/ApiSync'
import { User } from './models/User'

interface UserProps {
  id?: number
  name?: string
  age?: number
}

const API_URL = 'http://localhost:3000/users'

// const user = new Model<UserProps>(
//   new Attributes<UserProps>({ name: 'Poooop', age: 21 }),
//   new Eventing(),
//   new ApiSync<UserProps>(API_URL)
// )

// user.on('save', () => {
//   console.log(user.get('id'), user.get('name'), user.get('age'))
// })

// console.log(user.get('id'), user.get('name'), user.get('age'))
// user.save()

const user = new User(
  new Model<UserProps>(
    new Attributes<UserProps>({ name: 'Yo', age: 12 }),
    new Eventing(),
    new ApiSync(API_URL)
  )
)

user.model.on('change', () => {
  console.log(
    user.model.attributes.get('id'),
    user.model.attributes.get('name'),
    user.model.attributes.get('age')
  )
})

console.log(
  user.model.attributes.get('id'),
  user.model.attributes.get('name'),
  user.model.attributes.get('age')
)
user.randomAge()
