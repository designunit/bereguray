import styles from './styles.module.css'
import { Header } from 'src/components/Header'
import { Button } from 'src/components/Button'

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
        <main>
            <Header
                menu={(
                    <>
                        <Button href={'https://app.latl.ng/map/bereguray'} theme={'link'}>Карта идей</Button>
                        <Button disabled theme={'link'}>Вопрос/Ответ</Button>
                        <Button disabled theme={'link'}>Команда</Button>
                    </>
                )}
                actions={(
                    <Button
                        theme={'primary'}
                        disabled={true}
                    >
                        оставить историю
                    </Button>
                )}
            />

            <div className={styles.slidesContainer}>
                {slides}
            </div>
        </main>
    )
}

export default ProjectPage