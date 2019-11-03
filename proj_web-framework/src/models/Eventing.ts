export class Eventing {
  events: { [eventName: string]: (() => void)[] } = {}

  on(eventName: string, callback: () => void): void {
    // if (!this.events[eventName]) {
    //   this.events[eventName] = []
    // }
    this.events[eventName].push(callback) // Why does not TS detect a possible undefined value here?
  }

  trigger(eventName: string): void {
    this.events[eventName].forEach(callback => {
      callback()
    })
  }
}
