import { AxiosPromise, AxiosResponse } from 'axios'

// T will be UserProps
interface ModelAttributes<T> {
  get<K extends keyof T>(key: K): T[K]
  set(update: T): void
  getAll(): T
}

interface Events {
  trigger(eventName: string): void
  on(eventName: string, callback: () => void): void
}

// T will be UserProps
interface Sync<T> {
  fetch(id: number): AxiosPromise
  save(data: T): AxiosPromise
}

type HasId = {
  id?: number
}

export class Model<T extends HasId> {
  constructor(
    public attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}

  on = this.events.on
  trigger = this.events.trigger
  get = this.attributes.get

  set(update: T): void {
    this.attributes.set(update)
    this.events.trigger('change')
  }

  // There must be an `id` before calling fetch()
  fetch(): void {
    const id = this.attributes.get('id')
    if (typeof id !== 'number') {
      throw new Error('cannot fetch without an id')
    }
    this.sync.fetch(id).then((res: AxiosResponse): void => {
      this.set(res.data)
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then((res: AxiosResponse): void => {
        this.set(res.data)
        this.events.trigger('save')
      })
      .catch((e: Error): void => {
        this.events.trigger('error')
      })
  }
}
