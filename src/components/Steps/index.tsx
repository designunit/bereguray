import s from './styles.module.css'
import { Step } from '../Step'

export const Steps: React.SFC = props => (
    <div className={s.container}>
        <Step
            iconPath={'/static/stepIcon.svg'}
            title={'Шаг 1 - ПЕРВЫЙ'}
            text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
        />
        <Step
            iconPath={'/static/stepIcon.svg'}
            title={'Шаг 2 - ВТОРОЙ'}
            text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
        />
        <Step
            iconPath={'/static/stepIcon.svg'}
            title={'Шаг 3 - НЕ ВТОРОЙ'}
            text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
        />
        <Step
            arrow={false}
            iconPath={'/static/stepIcon.svg'}
            title={'Шаг 4 - ПОСЛЕДНИЙ'}
            text={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.'}
        />
    </div>
)
