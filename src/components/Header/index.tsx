import s from './styles.module.css'

import { Logo } from '../Logo'
import { ControlsContext } from 'src/context/controls'

export type HeaderProps = {
    menu: React.ReactNode
    actions: React.ReactNode
}

export const Header: React.SFC<HeaderProps> = props => (
    <ControlsContext.Provider value={{
        size: 'small'
    }}>
        <header className={s.header}>
            <nav style={{ flex: 1 }}>
                {props.menu}
            </nav>

            <Logo style={{ flex: 1 }} />

            <div
                style={{ flex: 1 }}
            >
                {props.actions}
            </div>
        </header>
    </ControlsContext.Provider>
)
