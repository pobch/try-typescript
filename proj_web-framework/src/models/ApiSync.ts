import axios, { AxiosPromise } from 'axios'

type HasId = {
  id?: number
}

export class ApiSync<T extends HasId> {
  constructor(public rootUrl: string) {}

  fetch(id: number): AxiosPromise {
    return axios.get(`${this.rootUrl}/${id}`)
  }

  save(data: T): AxiosPromise {
    if (data.id) {
      return axios.put(`${this.rootUrl}/${data.id}`, data)
    }
    return axios.post(`${this.rootUrl}`, data)
  }
}
