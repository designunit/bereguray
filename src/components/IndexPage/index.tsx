import styles from './index.module.css'
import { Button } from '../Button'
import { Logo } from '../Logo'
import { Title } from '../Title'
import { PageSection } from '../PageSection'

const IndexPage = () => (
    <>
        <div className={styles.layout}>
            <header className={styles.header}>
                <nav style={{ flex: 1 }}>
                    <Button theme={'link'}>Карта идей</Button>
                    <Button theme={'link'}>Вопрос/Ответ</Button>
                    <Button theme={'link'}>Команда</Button>
                </nav>

                <Logo style={{ flex: 1 }} />

                <div
                    style={{ flex: 1 }}
                >
                    <Button
                        theme={'primary'}
                        size={'small'}
                        disabled={true}
                    >
                        оставить историю
                    </Button>
                </div>
            </header>

            <main>
                <PageSection
                    back={(
                        <div style={{
                            width: '100%',
                            height: '100%',
                            backgroundImage: 'url("/hero.jpg")',
                            backgroundSize: 'cover',
                        }} />
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

                    <div className={styles.heroButtons}>
                        <Button
                            style={{
                                marginRight: '20px'
                            }}
                            theme={'primary'}
                        >
                            Оставить историю
                        </Button>
                        <Button>
                            Добавить мнение
                        </Button>
                    </div>
                </PageSection>

                <PageSection>
                    <div className={styles.about}>
                        <img src='/unit.jpg' />
                        <div className={styles.aboutText}>
                            <h3 className={styles.title}>
                                Что это? и зачем это?
                            </h3>
                            <span className={styles.description}>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
                                dis parturient montes, nascetur ridiculus

                                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
                                Nulla consequat massa quis enim.
                            </span>
                        </div>
                    </div>
                </PageSection>

                <PageSection>
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <img src='/icon.svg' />
                            <span className={styles.stepTitle}>
                                Шаг 1 - ХОП
                            </span>
                            <span className={styles.stepDescription}>
                                Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor.
                            </span>
                        </div>

                        <img src='/icon.svg' />

                        <div className={styles.step}>
                            <img src='/icon.svg' />
                            <span className={styles.stepTitle}>
                                Шаг 2 - ХЕЙ
                            </span>
                            <span className={styles.stepDescription}>
                                Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor.
                            </span>
                        </div>

                        <img src='/icon.svg' />

                        <div className={styles.step}>
                            <img src='/icon.svg' />
                            <span className={styles.stepTitle}>
                                Шаг 3 - ЛАЛА
                            </span>
                            <span className={styles.stepDescription}>
                                Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor.
                            </span>
                        </div>

                        <img src='/icon.svg' />

                        <div className={styles.step}>
                            <img src='/icon.svg' />
                            <span className={styles.stepTitle}>
                                Шаг 4 - ЛЕЙ
                            </span>
                            <span className={styles.stepDescription}>
                                Lorem ipsum dolor sit amet,
                                consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor.
                            </span>
                        </div>
                    </div>
                </PageSection>
                <PageSection>
                    <Button
                        theme={'primary'}
                        size={'big'}
                        style={{
                            marginRight: '24px',
                        }}
                    >
                        Оставить историю
                    </Button>
                    <Button
                        theme={'default'}
                        size={'big'}
                    >
                        Присоединиться к проекту
                    </Button>

                </PageSection>
            </main>
        </div>
    </>
)

export default IndexPage