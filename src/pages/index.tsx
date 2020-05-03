import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageSection } from 'src/components/PageSection'
import { Stories } from 'src/components/Stories'
import { Bubble } from 'src/components/Bubble'
import { Meta, IMeta } from 'src/components/Meta'
import { Steps } from 'src/components/Steps'
import { About } from 'src/components/About'
import { Story } from 'src/components/Story'
import { Article } from 'src/components/Article'

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

        <About />
        {/* <Steps /> */}
        <Stories />

        <div>
            <h2>FAQ</h2>

            <Story
                pictureSide='left'
                title={(
                    <h2>В Урае есть множество других проблем городской среды, почему делают набережную?</h2>
                )}
            >
                <Article>
                    Цель грантового конкурса — создание привлекательных городских пространств, способствующих повышению качества жизни, привлечению в город посетителей, развитию индустрии услуг. Финансирование выделяется только на развитие общественных пространств. Соответственно средства федерального конкурса невозможно пустить на решение других средовых проблем города, для этого существуют другие федеральные и региональные программы выделения средств.
                </Article>
            </Story>
            <Story
                pictureSide='left'
                title={(
                    <h2>Когда будет построена набережная?</h2>
                )}
            >
                <Article>
                    В 2021-2022 годах набережная будет реализована.
                </Article>
            </Story>
            <Story
                pictureSide='left'
                title={(
                    <h2>Кто разрабатывает проект набережной?</h2>
                )}
            >
                <Article>
                    Проектная студия design unit 4 (г. Санкт-Петербург). Проекты студии можно посмотреть на сайте unit4.io. Команда студии участвовала в разработке проектов-победителей конкурса лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ.
                </Article>
            </Story>
            <Story
                pictureSide='left'
                title={(
                    <h2>Как рассказать о моих идеях для будущей набережной?</h2>
                )}
            >
                <Article>
                    Шаг 1. Пройти опрос и написать проблемы/ценности/предложения на карте. Шаг 2. Следить за новостями сайта и принять участие в открытых онлайн-встречах по проекту Шаг 3. По желанию вступить в общественный совет проекта.
                </Article>
            </Story>

            <Story
                pictureSide='left'
                title={(
                    <h2>Опрос прошел, как еще могу помочь?</h2>
                )}
            >
                <Article>
                    Расскажите о проекте вашим знакомым и соседям, поделитесь ссылкой на сайт и опрос.
                </Article>
            </Story>
        </div>
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