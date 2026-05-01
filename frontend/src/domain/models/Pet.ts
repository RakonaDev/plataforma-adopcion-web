import { Race } from "./Race"

export interface Pet {
  id: number
  name: string
  description: string
  age: number
  images: Images[]
  race: Race
  breed: string
  gender: string
  isVaccinated: boolean
}

export interface Images {
  url: string
}