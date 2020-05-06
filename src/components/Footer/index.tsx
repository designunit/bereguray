import s from './styles.module.css'
import { Title } from '../Title'

export const Footer: React.SFC = props => {
 
    return (
        <section className={s.container}>
            <div className={`${s.text} ${s.year}`}>
                ©2020 design unit 4
            </div>

            <span className={s.items}>
            <div className={s.item}>
                <a href="http://uray.ru">
                    <img 
                        src='/static/logo_yraygerb.png'
                        className={s.picture}
                    />
                </a>
                <div className={s.text}>
                    <Title level={4}>
                        При поддержке
                    </Title>
                    администрация города Урай
                </div>
            </div>

            <div className={s.item}>
                <a href="https://gorsreda86.ugraces.ru"><img src='/static/logo_senter.png'
                    className={s.picture}
                /></a>
                <div className={s.text}>
                    <Title level={4}>
                        При поддержке
                    </Title>
                    центр компетенций<br/>
                    по вопросам городской среды<br/>
                    Ханты-Мансийского Автономного Округа - ЮГРЫ
                </div>
            </div>

            <div className={s.item}>
                <a href="https://unit4.io"><img src='/static/unit.jpg'
                    className={s.picture}
                    style={{
                        maxWidth: '200px'
                    }}
                /> </a>
                <div className={s.text}>
                    <Title level={4}>
                        Разработчик
                    </Title>
                    проектная студия design unit 4
                </div>
            </div>
            </span>
        </section>
    )
}