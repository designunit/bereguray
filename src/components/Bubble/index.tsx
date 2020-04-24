import s from './styles.module.css'
import * as d3Shape from 'd3-shape'
import { useState } from 'react'
import { useRafLoop } from 'react-use'
import { interpolateString } from 'd3-interpolate'

export type BubbleProps = {
    style?: React.CSSProperties
    durationMs?: number
    color?: string
    opacity?: number
    picturePath?: string
}

const generateKeyFrame = () => {
    const pointCount = 12
    const angle = Math.PI * 2
    const line = d3Shape.lineRadial().curve(d3Shape.curveCardinalClosed)
        .radius((d, i) => .5 * .5 + Math.random()*.5 * .5)
        .angle((d, i) => angle/pointCount*i + Math.random()*angle/pointCount*.5)
    const str = line({length: pointCount} as any) as string

    return str
}

export const Bubble: React.FC<BubbleProps> = ({ 
    durationMs = 10 * 1000,
    picturePath, 
    color = 'white', 
    opacity = 1,
    ...props 
}) => {

    const [keyFrame, setKeyFrame] = useState(generateKeyFrame())
    const [prevKeyFrame, setPrevKeyFrame] = useState(generateKeyFrame())
    const [d, setD] = useState(keyFrame)

    const [prevSin, setPrevSin] = useState(.5)

    useRafLoop(time => {
        const mapPoints = interpolateString(prevKeyFrame, keyFrame)

        const sin = Math.sin(time / durationMs)

        if (Math.sign(sin) !== Math.sign(prevSin)) {
            setPrevKeyFrame(d)
            setKeyFrame(generateKeyFrame())
        }
        
        setD(mapPoints(sin*sin))

        setPrevSin(sin)
    })

    const path = (
        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            fill={color} 
            opacity={opacity} 
            transform='translate(.5, .5)'
            d={d}
        />
    )
    
    const clipPathId = `clipPath${picturePath}`

    return (
        <>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{...props.style, height: picturePath ? 0 : props.style?.height}} 

                preserveAspectRatio="none"
                viewBox='0 0 1 1'
            >
                {!picturePath ? path : (
                    <defs>
                        <clipPath 
                            id={clipPathId}
                            clipPathUnits='objectBoundingBox'
                        >
                            {path}
                        </clipPath>
                    </defs>
                )}
            </svg>
            
            {!picturePath ? null : (
                <img src={picturePath} style={{...props.style, WebkitClipPath: `url(#${clipPathId})`, clipPath: `url(#${clipPathId})`}} />
            )}
        </>
    )
}