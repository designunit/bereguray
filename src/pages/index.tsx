import Head from 'next/head'
import { NextPage } from 'next'
import IndexPage from 'src/components/IndexPage'

const Index: NextPage = () => (
    <>
        <Head>
            <title>#БЕРЕГУРАЙ</title>
        </Head>

        <IndexPage />
    </>
)

export default Index