import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageSection } from 'src/components/PageSection'
// import { Stories } from 'src/components/Stories'
import { Bubble } from 'src/components/Bubble'
import { Meta, IMeta } from 'src/components/Meta'
import { Steps } from 'src/components/Steps'
import { Step } from 'src/components/Step'

interface PageProps {
    meta: IMeta
}

const Index: NextPage<PageProps> = props => (
    <ParallaxProvider>
        <Head>
            <title>#БЕРЕГУРАЙ</title>
            <Meta meta={props.meta} />
        </Head>

        <PageSection
            back={(
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/static/uray2.jpg")',
                    backgroundSize: 'auto 100%',
                    backgroundPosition: '100% top',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <Bubble
                        style={{
                            position: 'relative',
                            left: '50%',
                            height: '100%',
                            transform: `scale(2)`,
                        }}
                        opacity={.5}
                        color='#25aae1'
                    />
                </div>
            )}
        >
            <Hero />
        </PageSection>

        {/* <Stories /> */}
        <Steps>
            <Step
                title={'2019'}
            >
                <ul>
                    <li>Выбор территории.</li>
                    <li>Проведение исследования территории и первых встреч с жителями.</li>
                </ul>
            </Step>
            <Step
                title={'Март 2020'}
            >
                <ul>
                    <li>Разработка предварительной концепции проекта.</li>
                </ul>
            </Step>
            <Step
                title={'Апрель-май 2020'}
            >
                <ul>
                    <li>
                        Уточнение предварительной концепции проекта.
                    </li>
                    <li>
                        Проведение интервью с горожанами и дополнительного опроса.
                    </li>
                    <li>
                        Запуск общественной кампании, общественного совета проекта.
                    </li>
                    <li>
                        Проведение онлайн встреч с жителями по обсуждению концепции.
                    </li>
                </ul>
            </Step>
            <Step
                title={'Май 2020'}
            >
                <ul>
                    <li>
                        Архитекторы дорабатывают проект с учетом полученной от жителей обратной связи.
                    </li>
                    <li>
                        Презентация итогового проекта жителям.
                    </li>
                    <li>
                        31 мая подача проекта на конкурс.
                    </li>
                </ul>
            </Step>
            <Step
                title={'Июнь-август 2020'}
            >
                <ul>
                    <li>
                        Оценка заявок федеральным жюри конкурса.
                    </li>
                    <li>
                        Очная защита проекта.
                    </li>
                </ul>
            </Step>
            <Step
                title={'2021-2022'}
            >
                <ul>
                    <li>
                        Реализация проекта.
                    </li>
                </ul>
            </Step>
        </Steps>
    </ParallaxProvider>
)

export const getStaticProps = async () => {
    const meta: IMeta = {
        title: '#БЕРЕГУРАЙ',
        description: 'Предлагайте идеи и делитесь своими историями Урая и берега реки Конда',
        image: 'https://берегурай.рф/static/uray2.jpg',
        imageWidth: 2500,
        imageHeight: 1635,

        url: 'https://берегурай.рф/',
        siteName: 'Набережная г.Урай',
        locale: 'ru_RU',
        type: 'website',
        domain: 'берегурай.рф',

        twitterCard: 'summary_large_image',
        twitterSite: '@',
        twitterCreator: '@tmshv',
    }

    return {
        props: {
            meta,
        }
    }
}

export default Index