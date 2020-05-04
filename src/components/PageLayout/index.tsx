import { Header } from 'src/components/Header'
import { Button } from 'src/components/Button'
import { useContext, useState, useCallback } from 'react'
import { ConfigContext } from 'src/context/config'

export const PageLayout: React.SFC = props => {
    const { mapUrl } = useContext(ConfigContext)
    
    const [isOpen, setIsOpen] = useState(false)
    const onClickMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])
    const onClick = useCallback(() => setIsOpen(false), [])

    return (
        <main>
            <Header
                isOpen={isOpen}
                onClickMenu={onClickMenu}
                menu={(
                    <>
                        <Button 
                            href={'/concept'}
                            theme={'link'}
                            onClick={onClick}    
                        >
                            Концепция
                        </Button>
                        <Button
                            href={mapUrl} 
                            theme={'link'}
                            onClick={onClick}
                        >
                            Карта идей
                        </Button>
                        <Button 
                            href='/#faq' 
                            theme={'link'}
                            onClick={onClick}
                        >
                            Вопрос/Ответ
                        </Button>
                        <Button 
                            href='/#team' 
                            theme={'link'}
                            onClick={onClick}
                        >
                            Команда
                        </Button>
                    </>
                )}
                actions={(
                    <Button
                        theme={'primary'}
                        href={mapUrl}
                    >
                        Поделиться мнением
                    </Button>
                )}
            />

            {props.children}
        </main>
    )
}
