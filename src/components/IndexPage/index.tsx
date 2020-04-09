import styles from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import { PageSection } from '../PageSection'
import { Header } from '../Header'
import { Steps } from '../Steps'
import { About } from '../About'
import { Bubble } from '../Bubble'
import { Step } from '../Step'

const IndexPage = () => (
    <main className={styles.layout}>
        <Header
            menu={(
                <>
                    <Button disabled theme={'link'}>Карта идей</Button>
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
                <>
                    {/* <Bubble
                        style={{
                            position: 'absolute',
                            width: '100%', height: '100%'
                        }}
                        opacity={.5}
                    /> */}
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("/static/uray2.jpg")',
                        backgroundSize: 'cover',
                        backgroundPosition: '30% top',
                        backgroundRepeat: 'no-repeat',
                    }}/>
                </>
            )}
        >
            <Title>
                #берегурай
                <br />
                набережная г.Урай
            </Title>


            <p className={styles.description}>
                Жители - главные участники процесса преобразования своего города.
            </p>
            <p className={styles.description}>
                Предлагайте идеи и делитесь своими историями Урая и берега реки Конда.
            </p>

            <div
                style={{
                    paddingTop: '64px'
                }}
            >
                <Button
                    disabled
                    style={{
                        marginRight: '20px',
                        marginBottom: '24px',
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

        <About />
        <Steps />
    </main>
)

export default IndexPage