import s from './styles.module.css'

export const Title: React.SFC = props => {
    return (
        <h1 className={s.title}>
            {props.children}
        </h1>
    )
}