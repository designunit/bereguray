import styles from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import { PageSection } from '../PageSection'
import { Header } from '../Header'
import { Story } from '../Story'
import { JoinForm } from '../JoinForm'
import { Steps } from '../Steps'
import { About } from '../About'

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
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/static/uray2.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: '30% top',
                    backgroundRepeat: 'no-repeat',
                }} />
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

        <div className={styles.stories}>
            <span style={{ marginBottom: '48px' }}>
                <Title>
                    Жители о набережной
                </Title>
            </span>
            <Story
                pictureSide='left'
                picturePath='/static/uray1.jpg'
                title={(
                    <h2>
                        Алена Апина
                    </h2>
                )}
                subtitle={(
                    <h3>Кто такая по жизни</h3>
                )}
                text={(
                    <p className={styles.description}>
                        Мой батя ебашит вообще адовые блюда.<br/>
                        Ну такой вот примерно рецепт усредненный, потому что вариаций масса. 
                        Берется суп, он не греется, греть - это не про моего батю. Он берет это суп, вываливает его на сковороду и начинает жарить. Добавляет в него огромное количество лука, чеснока, перца черного и красного МУКИ! для вязкости, томатная паста сверху.
                    </p>
                )}
            />
            <Story
                pictureSide='right'
                picturePath='/static/uray2.jpg'
                title={(
                    <h2>
                        Алена Апина
                    </h2>
                )}
                subtitle={(
                    <h3>subtitle</h3>
                )}
                text={(
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.<br/><br/> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus 
                        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                )}
            />

            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',

            }}>
                <span className={styles.storiesButton}>
                    <Button
                        size='big'
                        theme='primary'
                        disabled
                    >
                        Оставить историю
                    </Button>
                </span>
                <Button
                    size='big'
                    disabled
                >
                    Присоедениться к проекту
                </Button>
            </div>
        </div>

        <div className={styles.form}>
            <Title>
                Присоединяйся к движению
            </Title>
            <JoinForm />
        </div>
    </main>
)

export default IndexPage