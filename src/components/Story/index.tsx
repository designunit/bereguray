import s from './styles.module.css'
import { Bubble } from '../Bubble'

const Ratio: React.SFC<{ ratio: number, className?: string }> = props => (
    <div className={props.className} style={{
        width: '100%',
        height: 0,
        position: 'relative',
        paddingBottom: `${props.ratio * 100}%`,
    }}>
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}>
            {props.children}
        </div>
    </div>
)

export type StoryProps = {
    picturePath?: string
    title?: React.ReactNode
    subtitle?: React.ReactNode
    text?: React.ReactNode
    pictureSide: 'left' | 'right'
}

export const Story: React.SFC<StoryProps> = props => (
    <div className={`${s.container} ${props.pictureSide === 'right' ? s.pictureRight : null}`}>
        {!props.picturePath ? null : (
            <div className={s.avatar}>
                <Ratio ratio={1}>
                    <Bubble
                        style={{
                            position: 'absolute',
                            maxWidth: '200%',
                            maxHeight: '200%',
                            height: '200%',
                            width: 'fit-content',
                            zIndex: -4,
                        }}
                        color='#B1F4EC'
                    />
                    <Bubble
                        style={{
                            position: 'absolute',
                            maxWidth: '120%',
                            maxHeight: '120%',
                            height: '120%',
                            width: 'fit-content',
                            zIndex: -3,
                        }}
                        color='#FFD166'
                    />
                    <img
                        src={props.picturePath}
                    />
                </Ratio>
            </div>
        )}

        <div className={s.text}>
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
