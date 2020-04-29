import s from './styles.module.css'
import { useMedia } from 'react-use';
import { Parallax } from 'react-scroll-parallax';

export type PageSectionProps = {
    back?: React.ReactNode
}

const ParallaxHOC: React.SFC = props => {
    const isMobile = useMedia('(max-width: 480px)')

    return (
        isMobile ? (
            <div style={{
                width: '100%',
                height: '100%',
                position: 'fixed',
            }}>
                {props.children}
            </div>
        ) : (
            <Parallax
                y={[-50, 50]}
                styleOuter={{
                    height: '100%',
                }}
                styleInner={{
                    height: '100%',
                }}
            >
                {props.children}
            </Parallax>
        )
    )
}

export const PageSection: React.SFC<PageSectionProps> = props => {
    
    return (
        <section className={s.section}>
            <div className={s.back}>
                <ParallaxHOC>
                    {props.back}
                </ParallaxHOC>
            </div>
            <div className={s.content}>
                {props.children}
            </div>
        </section>
    )
}