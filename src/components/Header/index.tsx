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
            <nav className={s.left}>
                {props.menu}
            </nav>

            <Logo style={{ flex: 1, padding: '0 5%' }} />

            <div className={s.right} >
                {props.actions}
            </div>
        </header>
    </ControlsContext.Provider>
)
