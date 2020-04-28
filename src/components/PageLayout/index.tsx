import { Header } from 'src/components/Header'
import { Button } from 'src/components/Button'

export const PageLayout: React.SFC = props => {
    return (
        <main>
            <Header
                menu={(
                    <>
                        <Button href={'/'} theme={'link'}>#</Button>
                        <Button href={'/project'} theme={'link'}>Проект</Button>
                        <Button href={'https://app.latl.ng/map/bereguray'} theme={'link'}>Карта идей</Button>
                        <Button disabled theme={'link'}>Вопрос/Ответ</Button>
                        <Button disabled theme={'link'}>Команда</Button>
                    </>
                )}
                actions={(
                    <Button
                        theme={'primary'}
                        disabled={true}
                    >
                        оставить историю
                    </Button>
                )}
            />

            {props.children}
        </main>
    )
}
