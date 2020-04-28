import s from './styles.module.css'

import cx from 'classnames'
import { Logo } from '../Logo'
import { ControlsContext } from 'src/context/controls'

export type HeaderProps = {
    menu: React.ReactNode
    actions: React.ReactNode
    transparent?: boolean
}

export const Header: React.SFC<HeaderProps> = ({ transparent = false, ...props }) => (
    <ControlsContext.Provider value={{
        size: 'small'
    }}>
        <header className={cx(s.header, {
            [s.transparent]: transparent,
        })}>
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
