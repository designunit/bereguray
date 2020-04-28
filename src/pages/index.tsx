import Head from 'next/head'
import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { PageSection } from 'src/components/PageSection'
import { Stories } from 'src/components/Stories'

const Index: NextPage = () => (
    <ParallaxProvider>
        <Head>
            <title>#БЕРЕГУРАЙ</title>
        </Head>

        <PageSection
            back={(
                <Parallax
                    y={[-50, 50]}
                    styleOuter={{
                        height: '100%',
                    }}
                    styleInner={{
                        height: '100%',
                    }}
                >
                    <div style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: 'url("/static/uray2.jpg")',
                        backgroundSize: 'auto 100%',
                        backgroundPosition: '100% top',
                        backgroundRepeat: 'no-repeat',
                    }} />
                </Parallax>
            )}
        >
            <Hero />
        </PageSection>

        <Stories></Stories>
    </ParallaxProvider>
)

export default Index