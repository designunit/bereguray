import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageSection } from 'src/components/PageSection'
// import { Stories } from 'src/components/Stories'
import { Bubble } from 'src/components/Bubble'
import { Meta, IMeta } from 'src/components/Meta'
// import { Steps } from 'src/components/Steps'
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
                title={'НОЯБРЬ'}
            >
                <ul>
                    <li>Выбор территории</li>
                    <li>Сбор пожеланий по функциональному наполнению</li>
                    <li>Разработка Концепции Сад "Технический поселок" вместе с жителями</li>
                </ul>
            </Step>
            <Step
                title={'Шаг 2 - ВТОРОЙ'}
            >
                <ul>
                    <li>Презентация Концепции жителям Краснокамска</li>
                    <li>Сбор мнений и предложений от жителей Краснокамска</li>
                </ul>
            </Step>
            <Step
                title={'Шаг 3 - НЕ ВТОРОЙ'}
            >
                <ul>
                    <li>Доработка проекта</li>
                </ul>
            </Step>
            <Step
                title={'Шаг 4 - ПОСЛЕДНИЙ'}
            >
                <ul>
                    <li>Подача заявки на Всеросскийский конкурс</li>
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