import s from './styles.module.css'

export type StoriesProps = {
    backgroundColor?: string
    faq?: boolean
}

export const Stories: React.SFC<StoriesProps> = ({ backgroundColor = 'white', faq = false, ...props }) => {
    return (
        <div className={s.stories} id={faq ? 'faq' : ''} style={{
            backgroundColor,
        }}>
            {props.children}
        </div>
    )
}