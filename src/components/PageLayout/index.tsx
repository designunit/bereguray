import { Header } from 'src/components/Header'
import { Button } from 'src/components/Button'
import { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

export const PageLayout: React.SFC = props => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <main>
            <Header
                menu={(
                    <>
                        <Button href={'/project'} theme={'link'}>Проект</Button>
                        <Button href={mapUrl} theme={'link'}>Карта идей</Button>
                        <Button disabled theme={'link'}>Вопрос/Ответ</Button>
                        <Button disabled theme={'link'}>Команда</Button>
                    </>
                )}
                actions={(
                    <Button
                        theme={'primary'}
                        href={mapUrl}
                    >
                        оставить историю
                    </Button>
                )}
            />

            {props.children}
        </main>
    )
}
