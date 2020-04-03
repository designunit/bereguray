import s from './styles.module.css'

export type LogoProps = {
    style?: React.CSSProperties
}

export const Logo: React.SFC<LogoProps> = props => (
    <span className={s.logo} style={props.style}>
        #БЕРЕГУРАЙ
    </span>
)