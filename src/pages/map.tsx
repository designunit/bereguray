import { NextPage } from "next"
import { Button } from "src/components/Button"
import { useEffect, useRef, useCallback, useState } from "react"
import { LatlngMap, OnReady, LatlngController } from "src/components/LatlngMap"

const Index: NextPage = props => {
    const ref = useRef<LatlngController>()
    // const [map, setMap] = useState<LatlngMap>()
    const [ready, setReady] = useState(false)

    const onClick = async () => {
        const map = ref.current!
        console.log('click', map)

        const point = await map.pickPoint('get', 'point')
        console.log('point', point)

        // const app = ref.current
        // console.log(ref.current)

        // app?.contentWindow?.postMessage({
        //     type: 'some-message',
        //     data: 'hello',
        // }, '*')
    }

    const onReady = useCallback<OnReady>(map => {
        if (!map) {
            console.error('Cannot initialize Latlng controller')
            return
        }

        ref.current = map
        setReady(true)
    }, [])

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
        }}>
            <LatlngMap
                mapId={'XXX'}
                accessToken={'YYY'}
                onReady={onReady}
            />

            {!ready ? null : (
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: 35,
                }}>
                    <Button
                        onClick={onClick}
                        theme={'primary'}
                    >Добавляем и пляшем</Button>
                </div>
            )}
        </div>
    )
}

export default Index