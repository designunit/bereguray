import s from './styles.module.css'
import * as d3Shape from 'd3-shape'
import { useRef, useEffect, useState } from 'react'
import { select } from 'd3-selection'

export type BubbleProps = {
    style?: React.CSSProperties
    duration?: number
    color?: string
    opacity?: number
    picturePath?: string
}

export const Bubble: React.FC<BubbleProps> = ({ 
    duration = 1000,
    picturePath, 
    color = 'white', 
    opacity = 1,
    ...props 
}) => {    
    const ref = useRef(null)

    const pointCount = 12
    const angle = Math.PI * 2
    const line = d3Shape.lineRadial().curve(d3Shape.curveCardinalClosed)
        .radius((d, i) => .25 + Math.random()*.5*.5)
        .angle((d, i) => angle / pointCount * i)

    useEffect(() => {
        select(ref.current) 
            .attr('d', line({length: pointCount} as any) as string)
    }, [])

    const path = (
        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            fill={color} 
            opacity={opacity} 
            transform='translate(.5, .5)'
            ref={ref}
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