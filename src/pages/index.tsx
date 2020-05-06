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
import { Step } from 'src/components/Step'
import { Title } from 'src/components/Title'
import { Footer } from 'src/components/Footer'
import { Button } from 'src/components/Button'
import { MapButton } from 'src/components/MapButton'

const Caption: React.SFC = props => (
    <span style={{
        fontSize: '1em',
        color: '#091133',
        fontWeight: 800,
        display: 'inline-block',
        marginBottom: 8,
    }}>{props.children}</span>
)

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
                        color='#ccd7ff'
                    />
                </div>
            )}
        >
            <Hero />
        </PageSection>
        <span id='about' />
        <Stories>
            <Title level={2}>
                Концепция развития
                <br />
                территории набережной реки Конда
            </Title>

            <About
                imageSrc={'/static/kondariver.png'}
            >
                <Article>
                    <p>
                        В 2019 году жители Урая выбрали набережную реки Конды для участия во Всероссийском конкурсе лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ. Победители конкурса получают на реализацию от 50 до 100 миллионов. Урайцы участвовали в опросах и встречах, где обсуждали задачи и свое видение развития территории.
                    </p>
                    <p>
                        В 2020 году проектная студия <a href='https://unit4.io'>design unit 4</a> (г. Санкт-Петербург) разработала предварительную концепцию набережной, основываясь на пожеланиях горожан, по заказу Администрации города.
                    </p>
                    <Button
                        href={'/concept'}
                        style={{
                            marginRight: '20px',
                            marginBottom: '36px',
                        }}
                        theme={'primary'}
                    >
                        Посмотреть концепцию
                    </Button>
                    <p>
                        Сейчас команда проекта уточняет концепцию, проводит интервью с жителями. А также запустила дополнительный опрос для того, чтобы получить обратную связь на предложенные идеи.
                    </p>
                    <p>
                        В мае мы запустим общественный совет проекта, который будет влиять на все решения о проекте, проведем онлайн встречи с жителями о проекте. Итоговой проект будет представлен горожанам и для жюри конкурса до 31 мая 2020.
                    </p>
                </Article>
            </About>
        </Stories>

        {/* РОАДМАП */}
        <span id='roadmap' />
        <Stories>
            <Title level={2}>Как будет развиваться проект</Title>
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
                    title={'Апрель 2020'}
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
                    title={'Июнь 2020'}
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
        </Stories>

        {/* КАРТА МНЕНИЙ */}
        <PageSection
            fullContent
            back={(
                <div style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url("/static/mapPreview.jpg")',
                    backgroundSize: 'auto 100%',
                    backgroundPosition: '100% top',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(204, 215, 255, 0.5)',
                    }}/>
                </div>
            )}
        >
            <div style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <div>
                    <Title level={2}>
                        Карта идей и предложений
                    </Title>
                    <Caption>
                        <p style={{textAlign: 'center', padding: '0 10%'}}>
                            Поделиться своим мнением просто: нажмите на кнопку, выберите отметку (идею, проблему или ценность), затем укажите точку на карте и напишите свой комментарий во всплывающем окне.
                        </p>
                    </Caption>
                </div>
                <MapButton>
                    Отметь идею на карте
                </MapButton>
            </div>
        </PageSection>

        {/* ЖИТЕЛИ О НАБЕРЕЖНОЙ */}
        <span id='stories' />
        <Stories backgroundColor={'rgba(204, 215, 255, 0.5)'}>
            <Title level={2}>Жители о набережной</Title>

            <Story
                pictureSide='left'
                picturePath='/static/annaizumova.png'
            >
                <Article>
                    <Title level={3}>Анна Изюмова</Title>
                    <Caption>
                        центр молодежи и дополнительного образования
                    </Caption>

                    <p>
                        Молодежному центру на набережной интересна фестивальная деятельность. Абсолютно разные фестивали: и декоративно-прикладные, и музыкальные, и хобби различные.
                    </p>
                    <p>
                        Для меня важнее всего чтобы она оставалась рентабельной, чтобы там не было чего-то нагроможденного. Что-то мобильное, максимально полезное. Оставить площадку для волейбола, в другом месте ее организовать нельзя. Сцена нужна. Для массовых мероприятий на набережной большое пространство, там и дискотеки молодежные, они хоть в городе мешать не будут.
                    </p>
                    <p>
                        Чтобы не повторять особенности наших городских площадей, надо, чтобы на этой территории были скверы, лавочки. Ещё нужно что-то такое, чтобы можно было детям и взрослым где-то быть. А вот ту, пустую территорию, использовать с минимальными затратами. Мне кажется, это самое лучшее применение: небольшие точечные культурные облагораживания и всё! Лишнего ничего не нужно туда. Мне кажется, что нельзя против природы идти, наоборот нужно использовать то что имеется максимально.

                    </p>
                </Article>
            </Story>
            <Story
                pictureSide='right'
                picturePath='/static/blanc2.png'
            >
                <Article>
                    <Title level={3}>
                        Попова Лариса Анатольевна
                    </Title>
                    <Caption>
                        заместитель директора по УВР школы №6
                    </Caption>

                    <p>
                        Физкультура может проходить на набережной, ИЗО и окружающий мир может быть, если будут какие-то аллеи и зоны.
                    </p>
                    <p>
                        Вот, например, у нас по школьной программе идут сезонные экскурсии: осенне- весенние изменения в природе, зимние изменения в природе, и зачастую мы просто гуляем по территории школы. Один год погуляли — на следующий год уже не интересно. А поскольку территория набережной больше, то и интереса там погулять и понаблюдать будет больше. У нас очень красивая река, очень красивый лес.
                    </p>
                </Article>
            </Story>
            <Story
                pictureSide='left'
                picturePath='/static/antonarguchinsky.png'
            >
                <Article>
                    <Title level={3}>
                        Антон Аргучинский
                    </Title>
                    <Caption>
                        предприниматель, активный житель
                    </Caption>

                    <p>
                        Да не нужно какой-то прям инфраструктуры, банальное подключение к электричеству. У меня много друзей играющих на электроинструментах. Мы собираемся, они начинают исполнять известные композиции и петь. И молодёжи это заходит. Да и на сцене можно и стендап проводить, и поиграть с детьми, да даже музыку просто включить. У нас сейчас набирает обороты брейк данс, проводили бы театр на свежем воздухе. Но всё же проблема с электричеством, а возить генераторы не каждый себе может позволить. Главное электричество, а дальше уже и пойдет, идеи будут, и это будет пользоваться спросом.
                    </p>
                </Article>
            </Story>
            <Story
                pictureSide='right'
                picturePath='/static/blanc2.png'
            >
                <Article>
                    <Title level={3}>
                        Парфентьева Алла Александровна
                    </Title>
                    <Caption>
                        директор управления градостроительства, землепользования и природопользования города Урай
                    </Caption>

                    <p>
                        Раньше в Колосье купались каждый вечер летом, пока жили на берегу. Прогулки с детьми, купание. Катание с горки на санках, катание на лыжах от 2 микрорайона до 3. Рыбу ловили постоянно и зимой и летом. Грибы собирали постоянно на другом берегу. С собаками постоянно гуляли и гуляем  — целое братство там. Просто закат посмотреть или радугу над Кондой!
                    </p>
                    <p>
                        Набережная объединяет два микрорайона, удобна для прогулок, транзита, вроде рядом с жилыми районами, и в то же время оказываешься на природе. Река успокаивает и притягивает.
                    </p>
                    <p>
                        Это место для разных сообществ. Места всем хватит: и бабушкам, и спортсменам, и собачникам. Должны быть спокойные уютные местечки и места сбора, где можно пошуметь, потанцевать, покричать.
                    </p>
                </Article>
            </Story>
            <Button
                size='big'
                href='https://docs.google.com/forms/d/e/1FAIpQLSfoGigVnGxanZPdSK09A8xZ8APUgPeyePbG_nI9USyEg7hiUA/viewform'
            >
                Поделись мнением
            </Button>
        </Stories>
        {/* <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',

            padding: '5%',
            paddingTop: '0',

            backgroundColor: 'rgba(204, 215, 255, 0.5)',
        }}>
            <HeroButton />
            <div style={{
                width: '36px',
                height: '36px',
            }} /> 
        </div> */}


        {/* ФАК */}
        <Stories backgroundColor={'#fff'} faq>
            <Title level={2}>Вопрос / ответ</Title>

            <Story
                pictureSide='right'
            >
                <Article>
                    <Title level={3}>
                        В Урае есть множество других проблем городской среды, почему делают набережную?
                    </Title>

                    <p>Цель грантового конкурса — создание привлекательных городских пространств, способствующих повышению качества жизни, привлечению в город посетителей, развитию индустрии услуг. Финансирование выделяется только на развитие общественных пространств. Соответственно средства федерального конкурса невозможно пустить на решение других средовых проблем города, для этого существуют другие федеральные и региональные программы выделения средств.</p>
                </Article>
            </Story>
            <Story
                pictureSide='right'
            >
                <Article>
                    <Title level={3}>
                        Когда будет построена набережная?
                    </Title>

                    <p>В 2021-2022 годах набережная будет реализована.</p>
                </Article>
            </Story>
            <Story
                pictureSide='right'
            >
                <Article>
                    <Title level={3}>
                        Кто разрабатывает проект набережной?
                    </Title>

                    <p>Проектная студия <a href="https://unit4.io">design unit 4</a> (г. Санкт-Петербург). Проекты студии можно посмотреть на сайте <a href="https://unit4.io">unit4.io</a>. Команда студии участвовала в разработке проектов-победителей конкурса лучших проектов создания комфортной городской среды в малых городах и исторических поселениях Министерства строительства РФ.</p>
                </Article>
            </Story>
            <Story
                pictureSide='right'
            >
                <Article>
                    <Title level={3}>
                        Как рассказать о моих идеях для будущей набережной?
                    </Title>

                    <p>Шаг 1. Пройти опрос и написать проблемы/ценности/предложения на карте. Шаг 2. Следить за новостями сайта и принять участие в открытых онлайн-встречах по проекту Шаг 3. По желанию вступить в общественный совет проекта.</p>
                </Article>
            </Story>

            <Story
                pictureSide='right'
            >
                <Article>
                    <Title level={3}>
                        Опрос прошел, как еще могу помочь?
                    </Title>

                    <p>Расскажите о проекте вашим знакомым и соседям, поделитесь ссылкой на сайт и опрос.</p>
                </Article>
            </Story>
        </Stories>
        <Footer />
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