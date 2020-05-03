import s from './styles.module.css'
import { Title } from '../Title'
import { Story } from '../Story'
import { Button } from '../Button'
import { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

export const Stories: React.SFC = props => {
    const { mapUrl } = useContext(ConfigContext)
    
    return (
        <div className={s.stories}>
            {/* <span style={{ marginBottom: '48px' }}>
                <Title>
                    Жители о набережной
                </Title>
            </span> */}

            {props.children}

            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',

            }}>
                <span className={s.storiesButton}>
                    <Button
                        size='big'
                        theme='primary'
                        href={mapUrl}
                    >
                        Поделиться мнением
                    </Button>
                </span>
                {/* <Button
                    size='big'
                >
                    Присоедениться к проекту
                </Button> */}
            </div>
        </div>
    )
}