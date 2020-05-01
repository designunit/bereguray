import styles from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

export const Hero: React.SFC = () => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <>
            <Title>
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
                    href={mapUrl}
                    style={{
                        marginRight: '20px',
                        marginBottom: '36px',
                    }}
                    theme={'primary'}
                >
                    Поделиться мнением
                </Button>
            </div>
        </>
    )
}