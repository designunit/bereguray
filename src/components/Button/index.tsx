import s from './styles.module.css'

import cx from 'classnames'
import { ControlsSize, ControlsContext } from 'src/context/controls'
import { useContext } from 'react'

export type ButtonTheme = 'default' | 'primary' | 'link'
export type ButtonShape = 'default' | 'pill' | 'circle'

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
    theme?: 'default' | 'primary' | 'link'
    size?: ControlsSize
    shape?: ButtonShape
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

const shapeClass = {
    default: s.shapeDefault,
    pill: s.shapePill,
    circle: s.shapeCircle,
}

export const Button: React.SFC<ButtonProps> =
    ({ theme = 'default', size = 'default', shape = 'default', children, ...props }) => {
        const config = useContext(ControlsContext)
        const sizeValue = size ?? config.size ?? 'default'

        return (
            <button
                {...props}
                className={cx(
                    s.button,
                    themeClass[theme],
                    sizeClass[sizeValue],
                    shapeClass[shape],
                    props.className
                )}
            >
                {children}
            </button>
        )
    }
