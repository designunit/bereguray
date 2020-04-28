import 'src/style.css'
import 'src/style/react-modal.css'

import Head from 'next/head'
import { AppType } from 'next/dist/next-server/lib/utils'
import { YMetrika } from 'src/components/YMetrika'
import { PageLayout } from 'src/components/PageLayout'

const App: AppType = props => {
    const { Component, pageProps } = props
    const metrika = process.env.YANDEX_METRIKA

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, maximum-scale=1.0" />

                <meta name="yandex-verification" content="819101876637a93a" />

                {!metrika ? null : (
                    <YMetrika
                        number={metrika}
                        mode={'script'}
                    />
                )}
            </Head>

            <PageLayout>
                <Component {...pageProps} />
            </PageLayout>
        </>
    )
}

export default App
