import s from './styles.module.css'
import { Title } from '../Title'
import { Story } from '../Story'
import { Button } from '../Button'
import { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

export const Stories: React.SFC = props => {
    const { mapUrl } = useContext(ConfigContext)
    
    return (
        <div className={s.stories}>
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
                    <p className={s.description}>
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
                    <p className={s.description}>
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