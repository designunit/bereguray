import s from './styles.module.css'

import cx from 'classnames'

export type ButtonTheme = 'default' | 'primary' | 'link'

export type ButtonProps = {
    style?: React.CSSProperties
    theme?: 'default' | 'primary' | 'link'
    size?: 'default' | 'small' | 'big'
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

export const Button: React.SFC<ButtonProps> = ({ theme = 'default', size = 'default', disabled = false, ...props }) => {
    return (
        <button
            className={cx(s.button, themeClass[theme], sizeClass[size], {
                [s.disabled]: disabled,
            })}
            style={props.style}
            disabled={disabled}
        >
            {props.children}
        </button>
    )
}