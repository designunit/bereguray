import s from './styles.module.css'
import { useMedia } from 'react-use';
import { Parallax } from 'react-scroll-parallax';
import { CSSProperties } from 'react';

export type PageSectionProps = {
    back?: React.ReactNode
    sectionStyle?: CSSProperties
    contentStyle?: CSSProperties 
}

export const PageSection: React.SFC<PageSectionProps> = props => {
    const isMobile = useMedia('(max-width: 480px)')
        
    return (
        <section className={s.section} style={props.sectionStyle}>
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
            <div className={s.content} style={props.contentStyle}>
                {props.children}
            </div>
        </section>
    )
}