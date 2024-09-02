import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: 'https://mesto.io/bereguray',
}

export const ConfigContext = createContext<Config>(defaultConfig)
