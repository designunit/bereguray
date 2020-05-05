import { Header } from 'src/components/Header'
import { Button } from 'src/components/Button'
import { useContext, useState, useCallback } from 'react'
import { ConfigContext } from 'src/context/config'
import { Menu } from '../Menu'

export const PageLayout: React.SFC = props => {
    const { mapUrl } = useContext(ConfigContext)
    
    const [isOpen, setIsOpen] = useState(false)
    const onClickMenu = useCallback(() => setIsOpen(!isOpen), [isOpen])

    return (
        <main>
            <Header
                isOpen={isOpen}
                onClickMenu={onClickMenu}
                menu={(
                    <Menu />
                )}
                actions={(
                    <Button
                        theme={'primary'}
                        href={mapUrl}
                        style={{
                            backgroundColor: '#FFD166',
                            color: '#111b47',
                            fontWeight: 600,
                        }}
                    >
                        Карта идей
                    </Button>
                )}
            />

            {props.children}
        </main>
    )
}
