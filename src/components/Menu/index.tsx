import { Button } from "../Button"
import { useRef, useCallback } from "react"

export const Menu: React.SFC = props => {

    const underline = useRef(null)

    const links = [
        <Button 
            href={'/#about'}
            theme={'link'}
            underlineRef={underline}
        >
            О проекте
        </Button>,
        <Button 
            href={'/concept'}
            theme={'link'}
            underlineRef={underline}
        >
            Концепция
        </Button>,
        <Button 
            href={'/#stories'} 
            theme={'link'}
            underlineRef={underline}
        >
            Жители о набережной
        </Button>,
        <Button 
            href={'/#faq'} 
            theme={'link'}
            underlineRef={underline}
        >
            Вопрос/Ответ
        </Button>
    ]

    return (
        <>
           {links}
           <div 
                ref={underline}
                style={{
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    backgroundColor: '#111b47',
                    transition: 'all 1s'
                }}
           />
        </>
    )
}