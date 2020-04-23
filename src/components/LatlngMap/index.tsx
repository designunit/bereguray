import { useEffect, useRef, useCallback } from "react"

enum LatlngMessage {
    ready = 'LATLNG_READY',
    action = 'LATLNG_ACTION',
    getState = 'LATLNG_GET_STATE',
    pickGeometry = 'LATLNG_PICK_GEOMETRY',
    addFeatures = 'LATLNG_ADD_FEATURES',
}

export type OnReady = (map?: LatlngController) => void
export type OnBeforeReady = (map: LatlngController) => Promise<void>

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

    async post<T = any>(type: LatlngMessage, payload: object) {
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

    public async getState<T>(selector: string) {
        const res = await this.post<T>(LatlngMessage.getState, {
            selector,
        })

        return res.payload
    }

    public async confirm() {
        const res = await this.post(LatlngMessage.action, {
            type: 'COMMAND_CONFIRM',
        })

        return res.payload
    }

    public async isMobile() {
        const isMobile = await this.getState<boolean>('layout.mobile')

        return isMobile
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

        return res.payload
    }

    public async addFeatures(obj: object, layer: string) {
        const res = await this.post(LatlngMessage.addFeatures, {
            layerId: layer,
            data: obj,
        })

        return res.payload
    }

    public async addFeature(obj: object, layer: string) {
        const geojson = {
            type: 'FeatureCollection',
            features: [obj],
        }

        return this.addFeatures(geojson, layer)
    }

    // async on(event, fn) {

    // }
}

const sleep = (ms: number) => new Promise(r => setTimeout(r, ms))

export type MapProps = {
    mapId: string
    accessToken: string
    onBeforeReady?: OnBeforeReady
    onReady: OnReady
}

export const LatlngMap: React.FC<MapProps> = props => {
    const ref = useRef<HTMLIFrameElement>()
    const src = `https://latl.ng/map/${props.mapId}?access_token=${props.accessToken}`

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

        if (typeof props.onBeforeReady === 'function') {
            await props.onBeforeReady(ctrl)
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
