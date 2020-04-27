import styles from './index.module.css'
import { ProjectSlide } from '../ProjectSlide'

const ProjectPage = () => {

    const slides = []
    const slidesCount = 8

    for (let i = 0; i < slidesCount; i++) {
        slides[i] = (
            <ProjectSlide
                picturePath={`/static/project/YRAI_${i+1}.png`}
            />
        )
    }

    return (
        <main>
            {slides}
        </main>
    )
}

export default ProjectPage