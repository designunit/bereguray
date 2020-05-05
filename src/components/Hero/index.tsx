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
                <strong>#Берегурай</strong> — общественная кампания проекта развития территории набережной реки Конда. Горожане, эксперты, бизнес, администрация города и архитекторы объединились для того, чтобы создать новые общественный центр для досуга всех жителей Урая. 

                </p>
                <p className={styles.description}>
                Повлияйте на облик реки Конды. Делитесь историями, предлагайте идеи, расскажите о своем видении набережной Урая.
                </p>
            </span>

            <div className={styles.heroButtons}>
                <Button
                    href={mapUrl}
                    theme={'primary'}
                    size='big'
                >
                    Карта идей
                </Button>
                <div className={styles.buttonsSpacer} />
                <Button
                    href='https://docs.google.com/forms/d/e/1FAIpQLSfoGigVnGxanZPdSK09A8xZ8APUgPeyePbG_nI9USyEg7hiUA/viewform'
                    size='big'
                >
                    Пройти опрос
                </Button>
            </div>
        </>
    )
}