import { createContext } from 'react'

export type ControlsSize = 'default' | 'small' | 'big'

export type Controls = {
    size: ControlsSize
}

export const ControlsContext = createContext<Controls>({
    size: 'default',
})
