import s from './styles.module.css'

import cx from 'classnames'
import { useState, useCallback } from 'react'
import { slide as MobileMenu } from 'react-burger-menu'
import { Logo } from '../Logo'
import { ControlsContext } from 'src/context/controls'
import { Bubble } from '../Bubble'

export type HeaderProps = {
    menu: React.ReactNode
    actions: React.ReactNode
    transparent?: boolean
    isOpen: boolean
    onClickMenu: () => void
}

export const Header: React.SFC<HeaderProps> = ({ transparent = false, isOpen, onClickMenu, ...props }) => {

    return (
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
                <button
                    className={s.menuButton}
                    onClick={onClickMenu}
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
                className={s.mobileMenu}
                itemListClassName={s.mobileMenuList}
            >
                <Bubble
                    color='white'
                    style={{
                        position: 'absolute',
                        zIndex: -1,
                        width: '100%',
                        height: '120%',
                        top: '-30%',
                        right: '-30%',
                        transform: `scale(${isOpen ? '2' : '0'}, ${isOpen ? '1' : '0'})`,
                        transition: 'transform 1s'
                    }}
                />
                <button
                    className={s.closeMenu}
                    onClick={onClickMenu}
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