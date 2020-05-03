import s from './styles.module.css'

export type StepProps = {
    title: string
}

export const Step: React.SFC<StepProps> = props => (
    <div className={s.step}>
        <h3>
            {props.title}
        </h3>
        <p>
            {props.children}
        </p>
    </div>
)