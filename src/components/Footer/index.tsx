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
                        Администрация Питкярантского муниципального района
                    </div>
                </div>

                <div className={s.item}>
                    <img src='/static/logo_senter.svg'
                        className={s.picture}
                    />
                    <div className={s.text}>
                        <Title level={3}>
                            Инициатор
                        </Title>
                        Целлюлозно-бумажный комбинат ООО «РК-Гранд»
                    </div>
                </div>

                <div className={s.item}>
                    <img src='/static/unit.jpg'
                        className={s.picture}
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
                        textAlign: 'center',
                    }}
                >
                    Месяц 2020 года
                </div>
            </div>
        </section>
    )
}