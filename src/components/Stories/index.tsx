import s from './styles.module.css'
import { Button } from '../Button'
import { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

interface StoriesProps {
    faq?: boolean
}

export const Stories: React.SFC<StoriesProps> = ({ faq = false, ...props }) => {
    const { mapUrl } = useContext(ConfigContext)
    
    return (
        <div className={s.stories} id={`${faq ? 'faq' : ''}`}>

            {props.children}

            <div style={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',

            }}>
                {faq ? null : (
                    <span className={s.storiesButton}>
                        <Button
                            size='big'
                            theme='primary'
                            href={mapUrl}
                        >
                            Поделиться мнением
                        </Button>
                    </span>
                )}
            </div>
        </div>
    )
}