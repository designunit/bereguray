import styles from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import { PageSection } from '../PageSection'
import { Header } from '../Header'
import { Parallax } from 'react-scroll-parallax';
import { Stories } from '../Stories'

const IndexPage = () => (
    <main className={styles.layout}>
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

        <PageSection
            back={(
                <Parallax 
                    y={[-50, 50]}
                    styleOuter={{
                        height: '100%',
                    }}
                    styleInner={{
                        height: '100%',
                    }}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("/static/uray2.jpg")',
                        backgroundSize: 'auto 100%',
                        backgroundPosition: '100% top',
                        backgroundRepeat: 'no-repeat',
                    }}/>
                </Parallax>
            )}
        >
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
        </PageSection>
        
        {/* <div className={styles.form}>
            <Title>
                Присоединяйся к движению
            </Title>
        </div> */}
    </main>
)

export default IndexPage