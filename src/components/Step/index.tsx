import s from './styles.module.css'

export type StepProps = {
    arrow?: boolean
    iconPath: string
    title: string
    text: string
}

export const Step: React.SFC<StepProps> = ({ arrow = true , ...props}) => (
    <>
        <div className={s.content}>
            <img src={props.iconPath} className={s.icon}/>
            <h3>
                {props.title}
            </h3>
            <p>
                {props.text}
            </p>
        </div>
        {!arrow ? null : (
            <div className={s.arrow}>
                <img src='static/stepArrow.svg' />
            </div>
        )}
    </>
)