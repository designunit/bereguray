import Head from 'next/head'
import { NextPage } from 'next'
import IndexPage from 'src/components/IndexPage'
import { ParallaxProvider } from 'react-scroll-parallax'

const Index: NextPage = () => (
    <ParallaxProvider>
        <Head>
            <title>#БЕРЕГУРАЙ</title>
        </Head>

        <IndexPage />
    </ParallaxProvider>
)

export default Index