import styles from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'

export const Hero: React.SFC = () => (
    <>
        <Title>
            #берегурай
            <br />
            набережная г.Урай
        </Title>

        <span className={styles.heroSubtitle}>
            <p className={styles.description}>
                Жители - главные участники процесса преобразования своего города.
            </p>
            <p className={styles.description}>
                Предлагайте идеи и делитесь своими историями Урая и берега реки Конда.
            </p>
        </span>

        <div className={styles.heroButtons}>
            <Button
                disabled
                style={{
                    marginRight: '20px',
                    marginBottom: '36px',
                }}
                theme={'primary'}
            >
                Оставить историю
            </Button>
            <Button disabled>
                Добавить мнение
            </Button>
        </div>
    </>
)
