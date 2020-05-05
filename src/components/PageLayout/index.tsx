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
                            href={'/#about'}
                            theme={'link'}
                            onClick={onClick}    
                        >
                            О проекте
                        </Button>
                        <Button 
                            href={'/concept'}
                            theme={'link'}
                            onClick={onClick}
                        >
                            Концепция
                        </Button>
                        <Button 
                            href={'/#stories'} 
                            theme={'link'}
                            onClick={onClick}
                        >
                            Жители о набережной
                        </Button>
                        <Button 
                            href={'/#faq'} 
                            theme={'link'}
                            onClick={onClick}
                        >
                            Вопрос/Ответ
                        </Button>
                    </>
                )}
                actions={(
                    <Button
                        theme={'primary'}
                        href={mapUrl}
                    >
                        Карта идей
                    </Button>
                )}
            />

            {props.children}
        </main>
    )
}
