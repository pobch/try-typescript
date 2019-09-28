// on chapter 169: Passthrough Methods, he do the following as a quick example:
type Callback = () => void

class Eventing {
  public events: { [key: string]: Callback[] } = {}

  on(eventName: string, callback: Callback): void {
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      this.events[eventName] = [callback]
    }
  }

  trigger(eventName: string): void {
    if (!this.events[eventName]) {
      return
    }
    this.events[eventName].forEach(callback => {
      callback()
    })
  }
}

class User {
  public events: Eventing = new Eventing()

  get on() {
    return this.events.on
  }

  get trigger() {
    return this.events.trigger
  }
}

const test = new User()
const on = test.on
on('change', () => {
  console.log('ON CHANGE!')
}) // gonna error because we lost context of `this`
