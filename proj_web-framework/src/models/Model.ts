import { AxiosPromise } from 'axios'

interface ModelAttributes<Props> {
  // Props === UserProps
  get<K extends keyof Props>(key: K): Props[K]
  set(value: Props): void
  getAll(): Props
}

interface Events {
  trigger(eventName: string): void
  on(eventName: string, callback: () => void): void
}

interface Sync<Props> {
  // Props === UserProps
  fetch(id: number): AxiosPromise
  save(data: Props): AxiosPromise
}

export class Model<T> {
  constructor(
    private attributes: ModelAttributes<T>,
    private events: Events,
    private sync: Sync<T>
  ) {}
}
