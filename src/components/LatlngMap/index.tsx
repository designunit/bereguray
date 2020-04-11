import { useEffect, useRef, useCallback } from "react"

enum LatlngMessage {
    ready = 'LATLNG_READY',
    pickGeometry = 'LATLNG_PICK_GEOMETRY',
}

export type OnReady = (map?: LatlngController) => void

function checkLatlngMessage(message?: any) {

}

export class LatlngController {
    private requestPool: Map<number, any> = new Map()

    constructor(
        private readonly target: Window,
        private readonly listenTarget: Window
    ) {
        // target.postMessage('message from uray', '*')

        this.listenTarget.addEventListener('message', event => {
            const reply = event.data?.reply ?? null

            if (this.requestPool.has(reply)) {
                const fn = this.requestPool.get(reply)
                fn(event.data)
            }

            console.log('Got message. Skip', event)

            // switch (type) {
            //     case LatlngMessage.ready: {

            //     }
            // }
        }, false)
    }

    async take(type: LatlngMessage) {
        return new Promise((resolve, reject) => {
            const handler = (e: MessageEvent) => {
                if (e.data.type === type) {
                    this.listenTarget.removeEventListener('message', handler, false)
                    resolve(e.data)
                }
            }

            this.listenTarget.addEventListener('message', handler, false)
        })
    }

    private createMessage(type: LatlngMessage, payload: object) {
        return 
    }

    async post(type: LatlngMessage, payload: object) {
        const messageId = Math.random()
        const message = {
            messageId,
            type,
            payload,
        }

        return new Promise<any>((resolve, reject) => {
            const callback = (response: any) => {
                const canceled = response?.canceled ?? false

                if (canceled) {
                    reject(new Error('Request was canceled by user'))
                } else {
                    resolve(response)
                }
            }
            this.target.postMessage(message, '*')

            if (message.messageId) {
                this.requestPool.set(message.messageId, callback)
            } else {
                resolve({ ok: true })
            }
        })
    }

    public async pickPoint(title: string, description: string) {
        const res = await this.post(LatlngMessage.pickGeometry, {
            geometryType: 'Point',
            title,
            description,
        })
        // if (!res.ok) {
        //     return null
        // }

        return res
    }

    // async on(event, fn) {

    // }
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

export type MapProps = {
    mapId: string
    accessToken: string
    onReady: OnReady
}

export const LatlngMap: React.FC<MapProps> = props => {
    const ref = useRef<HTMLIFrameElement>()
    const src = `http://localhost:3000/map/${props.mapId}?access_token=${props.accessToken}`

    const onLoad = useCallback(async (e: any) => {
        if (!ref.current?.contentWindow) {
            props.onReady()
            return
        }

        const ctrl = new LatlngController(
            ref.current.contentWindow,
            window,
        )
        const status = await ctrl.take(LatlngMessage.ready)
        if (!status) {
            props.onReady()
            return
        }

        props.onReady(ctrl)
    }, [])

    return (
        <div
            style={{
                width: '100%',
                height: '100%',
                minWidth: 300,
                minHeight: 300,
            }}
        >
            <iframe
                // sandbox={'allow-scripts'}
                ref={ref as any}
                frameBorder={'none'}
                src={src}
                width={'100%'}
                height={'100%'}
                onLoad={onLoad}
            />
        </div>
    )
}
