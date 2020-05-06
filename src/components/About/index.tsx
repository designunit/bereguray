import s from './styles.module.css'

export type AboutProps = {
    imageSrc: string
}

export const About: React.SFC<AboutProps> = props => (
    <div className={s.container} >
        <div className={s.picture}>
            <img src={props.imageSrc} />
        </div>
        <div className={s.text}>
            {props.children}
        </div>
    </div>
)
