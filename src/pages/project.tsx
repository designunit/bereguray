import Head from 'next/head'
import { NextPage } from 'next'
import { Slides } from 'src/components/Slides'

const Project: NextPage = () => {
    const images = [
        '/static/project/YRAI_1.png',
        '/static/project/YRAI_2.png',
        '/static/project/YRAI_3.png',
        '/static/project/YRAI_4.png',
        '/static/project/YRAI_5.png',
        '/static/project/YRAI_6.png',
        '/static/project/YRAI_7.png',
        '/static/project/YRAI_8.png',
    ]

    return (
        <>
            <Head>
                <title>#БЕРЕГУРАЙ</title>
            </Head>

            <Slides
                images={images}
            /> 
        </>
    )
}

export default Project