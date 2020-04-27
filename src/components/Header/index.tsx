import s from './styles.module.css'
import { slide as MobileMenu } from 'react-burger-menu'

import { Logo } from '../Logo'
import { ControlsContext } from 'src/context/controls'
import { useState, useCallback } from 'react'

export type HeaderProps = {
    menu: React.ReactNode
    actions: React.ReactNode
}

export const Header: React.SFC<HeaderProps> = props => {

    const [isOpen, setIsOpen] = useState(false)
    const onClick = useCallback(() => setIsOpen(!isOpen), [isOpen])

    return (
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
                <img 
                    className={s.menuButton} 
                    src='/static/menu.svg' 
                    onClick={onClick}
                />
            </header>

            <MobileMenu
                right
                width='100%'
                isOpen={isOpen}
                customBurgerIcon={false}
                customCrossIcon={false}
                menuClassName={s.mobileMenu}
                itemListClassName={s.mobileMenuList}
            >
                <img 
                    className={s.menuButton} 
                    src='/static/menu.svg' 
                    onClick={onClick}
                />
                {props.menu}
            </MobileMenu>
        </ControlsContext.Provider>
    )
}