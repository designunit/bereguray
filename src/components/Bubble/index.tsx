import s from './styles.module.css'
import * as d3Shape from 'd3-shape'
import { useRef, useEffect, useState } from 'react'

export type BubbleProps = {
    style?: React.CSSProperties
    duration?: number
    color?: string
    opacity?: number
    picturePath?: string
}

const getData = () => {
    const pointCount = 12
    const angle = Math.PI * 2
    const line = d3Shape.lineRadial().curve(d3Shape.curveCardinalClosed)
        .radius((d, i) => .25 + Math.random()*.5*.5)
        .angle((d, i) => angle / pointCount * i)
    const str = line({length: pointCount} as any) as string

    return str
}

export const Bubble: React.FC<BubbleProps> = ({ 
    duration = 3000,
    picturePath, 
    color = 'white', 
    opacity = 1,
    ...props 
}) => {
    const path = (
        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            fill={color} 
            opacity={opacity} 
            transform='translate(.5, .5)'
            d={getData()}
        >
            <animate 
                attributeName='d'
                dur='3s'
                repeatCount='indefinite'
                values={`${getData()}; ${getData()}; ${getData()}; ${getData()}; `}
            />
        </path>
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