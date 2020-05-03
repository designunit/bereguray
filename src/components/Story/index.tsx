import s from './styles.module.css'
import { Bubble } from '../Bubble'

export type StoryProps = {
    picturePath?: string
    title: React.ReactNode
    subtitle?: React.ReactNode
    text?: React.ReactNode
    pictureSide: 'left' | 'right'
}

export const Story: React.SFC<StoryProps> = props => (
    <div className={`${s.container} ${props.pictureSide === 'right' ? s.pictureRight : null}`}>
        <div className={s.picture}>
            {!props.picturePath ? null : (
                <>
                    <Bubble
                        style={{
                            position: 'absolute',
                            maxWidth: '100%',
                            maxHeight: '100%',
                            transform: `scale(1.1)`,
                        }}
                        color='#B1F4EC'
                    />
                    <Bubble
                        style={{
                            position: 'absolute',
                            maxWidth: '100%',
                            maxHeight: '100%',
                        }}
                        color='#FFD166'
                    />
                    <Bubble
                        style={{
                            width: '100%',
                        }}
                        picturePath={props.picturePath}
                    />
                </>
            )}
        </div>

        <div className={s.spacer} />

        <div>
            <div className={s.header}>
                <span className={s.title}> {props.title} </span>
                {!props.subtitle ? null : (
                    <span className={s.subtitle}>{props.subtitle}</span>
                )}
            </div>
            {props.text}
            {props.children}
        </div>
    </div>
)
