type Callback = () => void

export class Eventing {
  // Why does not TS automatically detect a possible undefined value??
  // Therefore, we have to manually put `| undefined` into type definition
  events: { [eventName: string]: Callback[] | undefined } = {}

  on = (eventName: string, callback: () => void): void => {
    let handlers = this.events[eventName] || []
    handlers.push(callback)
    this.events[eventName] = handlers
  }

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName]
    if (!handlers || handlers.length === 0) return
    handlers.forEach(callback => {
      callback()
    })
  }
}
