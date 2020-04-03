import s from './styles.module.css'

import cx from 'classnames'

export type ButtonTheme = 'default' | 'primary' | 'link'

export type ButtonProps = {
    style?: React.CSSProperties
    theme?: 'default' | 'primary' | 'link'
}

const themeClass = {
    default: s.themeDefault,
    primary: s.themePrimary,
    link: s.themeLink,
}

export const Button: React.SFC<ButtonProps> = ({ theme = 'default', ...props }) => {
    return (
        <button
            className={cx(s.button, themeClass[theme])}
            style={props.style}
        >
            {props.children}
        </button>
    )
}