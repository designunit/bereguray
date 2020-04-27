import s from './styles.module.css'
import { slide as MobileMenu } from 'react-burger-menu'

import { Logo } from '../Logo'
import { ControlsContext } from 'src/context/controls'
import { useState, useCallback } from 'react'
import { Button } from '../Button'
import { Bubble } from '../Bubble'

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
                <button
                    className={s.menuButton}
                    onClick={onClick}
                >
                    <img 
                        src='/static/menu.svg' 
                    />
                </button>
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
                <Bubble
                    color='white'
                    style={{
                        position: 'absolute',
                        zIndex: -1,
                        width: '100%',
                        height: '100%',
                        top: '-25%',
                        right: '-30%',
                        transform: `scale(${isOpen ? '2' : '0'}, ${isOpen ? '1' : '0'})`,
                        transition: 'transform 1s'
                    }}
                />
                <button
                    className={s.closeMenu}
                    onClick={onClick}
                >
                    <img  
                        src='/static/closeMenu.svg' 
                    />
                </button>
                {props.menu}
            </MobileMenu>
        </ControlsContext.Provider>
    )
}