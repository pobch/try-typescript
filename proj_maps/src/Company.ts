import { Mappable } from './CustomMap'
import faker from 'faker'

export class Company implements Mappable {
  companyName: string
  catchPhrase: string
  location: {
    lat: number
    lng: number
  }

  constructor() {
    this.companyName = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: +faker.address.latitude(),
      lng: +faker.address.longitude()
    }
  }

  description() {
    return `
      <h2>${this.companyName}</h2>
      <h3>${this.catchPhrase}</h3>
    `
  }
}
