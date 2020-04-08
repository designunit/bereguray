import styles from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import { PageSection } from '../PageSection'
import { Header } from '../Header'
import { Steps } from '../Steps'

const IndexPage = () => (
    <main className={styles.layout}>
        {/* <Header
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
        /> */}

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

        {/* <PageSection>
            <div 
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}
            >
                <img src='/static/unit.jpg' 
                    style={{
                        minWidth: '480px',
                        maxWidth: '33%', 
                        objectFit: 'contain',

                        marginRight: '128px'
                    }}
                />
                <div style={{maxWidth: '500px'}}>
                    <h2>
                        Что такое #берегурай?
                    </h2>
                    <p className={styles.description}>
                        #берегурай - общественная кампания для жителей города Урай
                    </p>
                    <p className={styles.description}>
                        Здесь вы сможете поделиться своим мнением и вместе определить проблемы, потенциалы и ценности для формирования нового общественного городского центра на набережной реки Конды в городе Урай.
                    </p>
                    <p className={styles.description}>
                        Собранные предложения лягут в основу разработки проекта набережной на Всероссийский конкурс Минстрой РФ в 2020 году.
                    </p>
                </div>
            </div> 
        </PageSection> */}
        
        <Steps />

        {/* <PageSection>
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

                </PageSection> */}
    </main>
)

export default IndexPage