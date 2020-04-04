import s from './styles.module.css'

export type StepProps = {
    arrow?: boolean
}

export const Step: React.SFC<StepProps> = ({ arrow = true , ...props}) => (
    <>
        <div className={s.content}>
            {props.children}
        </div>
        {!arrow ? null : (
            <div className={s.arrow}>
                <img src='static/stepArrow.png' />
            </div>
        )}
    </>
)