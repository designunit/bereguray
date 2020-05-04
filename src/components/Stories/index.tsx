import s from './styles.module.css'

export type StoriesProps = {
    backgroundColor?: string
}

export const Stories: React.SFC<StoriesProps> = ({ backgroundColor = 'white', ...props }) => {
    return (
        <div className={s.stories} style={{
            backgroundColor,
        }}>
            {props.children}
        </div>
    )
}