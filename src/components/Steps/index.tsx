import s from './styles.module.css'
import ImageGallery from 'react-image-gallery'
import { ReactNode } from 'react'

export const Steps: React.SFC = props => (
    <div className={s.container}>
        <ImageGallery
            additionalClass={s.galleryContainer}
            items={[
                {
                    renderItem: item => (props.children as ReactNode[]).filter((x,i) => i < 3),
                    originalClass: s.test,
                }, 
                {
                    renderItem: item => (props.children as ReactNode[]).filter((x,i) => i >= 3),
                    originalClass: s.test,
                },
            ]}

            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
            infinite={false}
        />
        <span className={s.noGallery}>
            {props.children}
        </span>
    </div>
)
