import s from './styles.module.css'

export type ButtonProps = {
    style?: React.CSSProperties
    theme?: 'default' | 'primary' | 'link'
}

export const Button: React.SFC<ButtonProps> = ({ theme = 'default', ...props }) => {
    return (
        <button
            className={s.button}
            style={props.style}
        >
            {props.children}
        </button>
    )
}