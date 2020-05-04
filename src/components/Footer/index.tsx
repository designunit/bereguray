import s from './styles.module.css'
import { Title } from '../Title'
import { Article } from '../Article'

export const Footer: React.SFC = props => {
 
    return (
        <section className={s.container} id='team'>
            <span className={s.title}>
                <Title level={2}>
                    Команда проекта
                </Title>
            </span>

            <div className={s.items}>
                <div className={s.item}>
                    <img src='/static/logo_yraygerb.svg'
                        className={s.picture}
                    />
                    <div className={s.text}>
                        <Title level={3}>
                            При поддержке
                        </Title>
                        Администрация города Урай
                    </div>
                </div>

                <div className={s.item}>
                    <img src='/static/logo_senter.svg'
                        className={s.picture}
                    />
                    <div className={s.text}>
                        <Title level={3}>
                            При поддержке
                        </Title>
                        Центр компетенций<br/>
                        по вопросам городской среды<br/>
                        Ханты-Мансийского Автономного Округа - ЮГРЫ
                    </div>
                </div>

                <div className={s.item}>
                    <img src='/static/unit.jpg'
                        className={s.picture}
                        style={{
                            maxWidth: '200px'
                        }}
                    />
                    <div className={s.text}>
                        <Title level={3}>
                            Разработчик
                        </Title>
                        проектная студия design unit 4
                    </div>
                </div>

                <div className={s.text}
                    style={{
                        flex: '1 0 auto',
                        alignSelf: 'flex-end',
                        textAlign: 'center',
                    }}
                >
                    2020 года
                </div>
            </div>
        </section>
    )
}