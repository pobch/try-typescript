// on chapter 169: Passthrough Methods, he do the following as a quick example:
type Callback = () => void

class Eventing {
  public evts: { [key: string]: Callback[] } = {}

  on(eventName: string, callback: Callback): void {
    if (this.evts[eventName]) {
      this.evts[eventName].push(callback)
    } else {
      this.evts[eventName] = [callback]
    }
  }

  trigger(eventName: string): void {
    if (!this.evts[eventName]) {
      return
    }
    this.evts[eventName].forEach(callback => {
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

// The following will cause error because we lost context of `this` :
test.on('change', () => {
  console.log('ON CHANGEEE!')
})
