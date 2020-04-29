import s from './styles.module.css'
import { useMedia } from 'react-use';
import { Parallax } from 'react-scroll-parallax';

export type PageSectionProps = {
    back?: React.ReactNode
}

export const PageSection: React.SFC<PageSectionProps> = props => {
    const isMobile = useMedia('(max-width: 480px)')
        
    return (
        <section className={s.section}>
            <div className={s.back}>
                <Parallax
                    y={[-50, 50]}
                    styleOuter={{
                        height: '100%',
                    }}
                    styleInner={{
                        height: '100%',
                    }}
                    disabled={isMobile}
                >
                    {props.back}
                </Parallax>
            </div>
            <div className={s.content}>
                {props.children}
            </div>
        </section>
    )
}