import s from './styles.module.css'
import * as d3 from 'd3-shape'

export type BubbleProps = {
    style?: React.CSSProperties
    duration?: number
    color?: string
    opacity?: number
    picturePath?: string
}

export const Bubble: React.FC<BubbleProps> = ({ 
    duration = 15 + Math.random()*60, 
    picturePath, 
    color = 'white', 
    opacity = 1,
    ...props 
}) => {    
    const length = 15
    const angle = Math.PI * 2
    const line = d3.lineRadial().curve(d3.curveCardinalClosed)
        .radius((d, i) => .25 + Math.random()*.5*.5)
        .angle((d, i) => angle / length * i)
    const path = (
        <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            fill={color} 
            opacity={opacity} 
            d={line({length} as [number,number][]) as string} 
            transform='translate(.5, .5)'>
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
                <img src={picturePath} style={{...props.style, clipPath: `url(#${clipPathId})`}} />
            )}
        </>
    )
}