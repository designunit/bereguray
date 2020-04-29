import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageSection } from 'src/components/PageSection'
// import { Stories } from 'src/components/Stories'
import { Bubble } from 'src/components/Bubble'
// import { Steps } from 'src/components/Steps'

const Index: NextPage = () => (
    <ParallaxProvider>
        <Head>
            <title>#БЕРЕГУРАЙ</title>
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
        {/* <Steps /> */}
    </ParallaxProvider>
)

export default Index