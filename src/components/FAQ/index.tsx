import s from './styles.module.css'
import { Title } from '../Title'
import { Story } from '../Story'
import { Button } from '../Button'
import { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

export const Faq: React.SFC = props => {
    const { mapUrl } = useContext(ConfigContext)
    
    return (
        <div className={s.stories}>
            <span style={{ marginBottom: '48px' }}>
                <Title>
                    Вопрос/ответ
                </Title>
            </span>
            <Story
                pictureSide='left'
                title={(
                    <h2>
                        В Урае есть множество других проблем городской среды, почему делают набережную?
                    </h2>
                )}
                text={(<>
                    <p className={s.description}>
                        Цель грантового конкурса — создание привлекательных городских пространств, способствующих повышению качества жизни, привлечению в город посетителей, развитию индустрии услуг. Финансирование выделяется только на развитие общественных пространств. Соответственно средства федерального конкурса невозможно пустить на решение других средовых проблем города, для этого существуют другие федеральные и региональные программы выделения средств.
                    </p>
                </>)}
            />
            <Story
                pictureSide='right'
                title={(
                    <h2>
                        Когда будет построена набережная?
                    </h2>
                )}
                text={(<>
                    <p className={s.description}>
                        В 2021-2022 годах набережная будет реализована.
                    </p>
                </>)}
            />
            <Story
                pictureSide='left'
                title={(
                    <h2>
                        Кто разрабатывает проект набережной?
                    </h2>
                )}
                text={(<>
                    <p className={s.description}>
                        Проектная студия design unit 4 (г. Санкт-Петербург). Проекты студии можно посмотреть на сайте unit4.io. Команда студии участвовала в разработке проектов-победителей конкурса лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ.
                    </p>
                </>)}
            />
            <Story
                pictureSide='right'
                title={(
                    <h2>
                        Как рассказать о моих идеях для будущей набережной?
                    </h2>
                )}
                text={(<>
                    <p className={s.description}>
                        Шаг 1. Пройти опрос и написать проблемы/ценности/предложения на карте.
                    </p>
                    <p className={s.description}>
                        Шаг 2. Следить за новостями сайта и принять участие в открытых онлайн-встречах по проекту
                    </p>
                    <p className={s.description}>
                        Шаг 3. По желанию вступить в общественный совет проекта.

                    </p>
                </>)}
            />
            <Story
                pictureSide='left'
                subtitle={(
                    <h3>директор управления градостроительства, землепользования и природопользования города Урай</h3>
                )}
                title={(
                    <h2>
                        Опрос прошел, как еще могу помочь?
                    </h2>
                )}
                text={(<>
                    <p className={s.description}>
                        Расскажите о проекте вашим знакомым и соседям, поделитесь ссылкой на сайт и опрос.
                    </p>
                </>)}
            />

            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',

            }}>
                <span className={s.storiesButton}>
                    <Button
                        size='big'
                        theme='primary'
                        href={mapUrl}
                    >
                        Поделиться мнением
                    </Button>
                </span>
                {/* <Button
                    size='big'
                >
                    Присоедениться к проекту
                </Button> */}
            </div>
        </div>
    )
}