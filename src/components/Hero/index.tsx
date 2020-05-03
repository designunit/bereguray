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
                Набережная реки Конда<br/>Урай
            </Title>

            <span className={styles.heroSubtitle}>
                <p className={styles.description}>
                #Берегурай — общественная кампания проекта развития территории набережной реки Конда. Горожане, эксперты, бизнес, администрация города и архитекторы design unit 4 объединились для того, чтобы создать новые общественный центр для досуга всех жителей Урая. 

                </p>
                <p className={styles.description}>
                Повлияйте на облик #берегурай реки Конды. Делитесь историями, предлагайте идеи, расскажите о своем видении набережной Урая.
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