import s from './styles.module.css'

import cx from 'classnames'
import { ControlsSize, ControlsContext } from 'src/context/controls'
import { useContext } from 'react'

export type ButtonTheme = 'default' | 'primary' | 'link'

export type ButtonProps = {
    style?: React.CSSProperties
    theme?: 'default' | 'primary' | 'link'
    size?: ControlsSize
    disabled?: boolean
}

const themeClass = {
    default: s.themeDefault,
    primary: s.themePrimary,
    link: s.themeLink,
}

const sizeClass = {
    default: s.sizeDefault,
    small: s.sizeSmall,
    big: s.sizeBig,
}

export const Button: React.SFC<ButtonProps> = ({ theme = 'default', disabled = false, ...props }) => {
    const config = useContext(ControlsContext)
    const size = props.size ?? config.size ?? 'default'

    return (
        <button
            className={cx(s.button, themeClass[theme], sizeClass[size])}
            style={props.style}
            disabled={disabled}
        >
            {props.children}
        </button>
    )
}