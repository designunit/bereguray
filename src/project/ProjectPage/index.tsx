import styles from './styles.module.css'

const ProjectPage = () => {

    const slides = []
    const slidesCount = 8

    for (let i = 0; i < slidesCount; i++) {
        slides[i] = (
            <img
                className={styles.picture} 
                src={`/static/project/YRAI_${i+1}.png`}
            />
        )
    }

    return (
        <main className={styles.layout}>
            <h1>
                Проект городской набережной Урая
            </h1>

            {slides}
        </main>
    )
}

export default ProjectPage