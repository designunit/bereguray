import s from './styles.module.css'

export type StoryProps = {
    picturePath: string
    title: React.ReactNode
    subtitle: React.ReactNode
    text: React.ReactNode
    pictureSide: 'left' | 'right'
}

export const Story: React.SFC<StoryProps> = props => (
        <div className={s.container}>
            {props.pictureSide === 'left' ? (
                <>
                    <div className={`${s.picture} ${s.left}`}>
                        <img src={props.picturePath} style={{ width: '100%' }} />
                    </div>

                    <div className={s.text} >
                        <div className={s.header}>
                            <span className={s.title}> {props.title} </span>
                            <span className={s.subtitle}> {props.subtitle} </span>
                        </div>
                        {props.text}
                    </div>
                </>
            ) : (
                <>
                    <div className={`${s.text} ${s.left}`} >
                        <div className={s.header}>
                            <span className={s.title}> {props.title} </span>
                            <span className={s.subtitle}> {props.subtitle} </span>
                        </div>
                        {props.text}
                    </div>

                    <div className={s.picture}>
                        <img src={props.picturePath} style={{ width: '100%' }} />
                    </div>
                </>
            )}
        </div>
)
