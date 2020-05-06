import s from './styles.module.css'
import { Button } from "../Button"
import { useRef } from "react"

interface MenuProps {
    onClick: () => void
}

export const Menu: React.SFC<MenuProps> = ({ onClick }) => {

    const underline = useRef(null)

    const buttons = [
        <Button 
            href={'/#about'}
            theme={'link'}
            underlineRef={underline}
            onClick={onClick}
            className='mobileMenuButton'
        >
            О проекте
        </Button>,
        <Button 
            href={'/concept'}
            theme={'link'}
            underlineRef={underline}
            onClick={onClick}
            className='mobileMenuButton'
        >
            Концепция
        </Button>,
        <Button 
            href={'/#stories'} 
            theme={'link'}
            underlineRef={underline}
            onClick={onClick}
            className='mobileMenuButton'
        >
            Жители о набережной
        </Button>,
        <Button 
            href={'/#faq'} 
            theme={'link'}
            underlineRef={underline}
            onClick={onClick}
            className='mobileMenuButton'
        >
            Вопрос/Ответ
        </Button>
    ]

    return (
        <>
           {buttons}
           <div 
                ref={underline}
                className={s.underline}
                style={{
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    backgroundColor: '#111b47',
                    transition: 'all .5s',
                }}
           />
        </>
    )
}