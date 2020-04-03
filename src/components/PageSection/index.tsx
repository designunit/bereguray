import s from './styles.module.css'

export type PageSectionProps = {
    back?: React.ReactNode
}
export const PageSection: React.SFC<PageSectionProps> = props => (
    <section className={s.section}>
        <div className={s.back}>
            {props.back}
        </div>
        <div className={s.content}>
            {props.children}
        </div>
    </section>
)
