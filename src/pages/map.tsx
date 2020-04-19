import { NextPage } from "next"
import { Button, ButtonProps } from "src/components/Button"
import { useEffect, useRef, useCallback, useState } from "react"
import { LatlngMap, OnReady, LatlngController, OnBeforeReady } from "src/components/LatlngMap"
import { Modal } from "src/components/Modal"
import { OpinionForm, OpitionFormData } from "src/components/OpinionForm"
import { OnSubmit } from "react-hook-form"
import { Header } from "src/components/Header"
import { Logo } from "src/components/Logo"

type Coord = {
    lat: number,
    lng: number,
}

enum ButtonMode {
    idle = 'idle',
    picking = 'picking',
}

const LABEL = 'Добавляем и пляшем'
const labels = new Map([
    [ButtonMode.idle, LABEL],
    [ButtonMode.picking, 'ok'],
])

type ActionButtonOnClick = (coord: Coord) => void
type ActionButtonProps = Omit<ButtonProps, 'onClick'> & {
    map: LatlngController
    onClick: ActionButtonOnClick
}

const ActionButton: React.FC<ActionButtonProps> = props => {
    const onClick = async () => {
        const point = await props.map.pickPoint('Кликни по карте', 'что-то произойдет')
        props.onClick(point)
    }

    return (
        <Button
            onClick={onClick}
            theme={'primary'}
            shape={'pill'}
            size={'big'}
        >
            {LABEL}
        </Button>
    )
}

const ConfirmActionButton: React.FC<ActionButtonProps> = props => {
    const [mode, setMode] = useState(ButtonMode.idle)
    const label = labels.get(mode)

    useEffect(() => {
        const f = async () => {
            const point = await props.map.pickPoint('Кликни по карте', 'что-то произойдет')
            setMode(ButtonMode.idle)
            props.onClick(point)
        }

        if (mode === ButtonMode.picking) {
            f()
        }
    }, [mode, props.map])

    const onClick = async () => {
        switch (mode) {
            case ButtonMode.idle: {
                setMode(ButtonMode.picking)
                break
            }

            case ButtonMode.picking: {
                const s = await props.map.confirm()
                break
            }

            default: {
                return
            }
        }
    }

    return (
        <Button
            onClick={onClick}
            theme={'primary'}
            shape={'pill'}
            size={'big'}
        >
            {label}
        </Button>
    )
}

const Index: NextPage = props => {
    const ref = useRef<LatlngController>()
    const [ready, setReady] = useState(false)
    const [mobile, setMobile] = useState(false)
    const [coord, setCoord] = useState<Coord>()
    const [showInputForm, setShowInputForm] = useState(false)

    const onClick = useCallback<ActionButtonOnClick>(coord => {
        setCoord(coord)
        setShowInputForm(true)
    }, [])

    const onSubmit = useCallback<OnSubmit<OpitionFormData>>(async values => {
        console.log(values, coord)
        if (!coord) {
            return
        }

        const map = ref.current!
        const ok = await map.addFeature({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [coord.lng, coord.lat]
            },
            properties: {
                comment: values.comment,
                email: values.email,
                type: values.type
            }
        }, '5e79ff332e22eb56cabf3819')

        closeModal()
    }, [coord])

    const closeModal = useCallback(() => {
        setShowInputForm(false)
    }, [])

    const onBeforeReady = useCallback<OnBeforeReady>(async map => {
        const mobile = await map.isMobile()

        setMobile(mobile)
    }, [])

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
                onBeforeReady={onBeforeReady}
                onReady={onReady}
            />
            <Modal
                isOpen={showInputForm}
                onRequestClose={closeModal}
                contentLabel={'Напиши гадость!'}
                ariaHideApp={false}
            >
                <OpinionForm
                    onSubmit={onSubmit}
                />
            </Modal>

            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                display: 'flex',
                // display: 'none',
                justifyContent: 'space-between',
                padding: 10,
            }}>
                <div style={{ display: 'flex', flex: 1 }}>
                    <Button
                        shape={'pill'}
                        size={'small'}
                        href={'/'}
                    >{'/'}</Button>
                    <div style={{ flex: 1 }} />
                </div>
                <Logo></Logo>
                {/* <Header
                    menu={null}
                    actions={null}
                ></Header> */}

                <div style={{ flex: 1 }} />
            </div>

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
                    {mobile ? (
                        <ConfirmActionButton
                            onClick={onClick}
                            theme={'primary'}
                            shape={'pill'}
                            size={'big'}
                            map={ref.current!}
                        />
                    ) : (
                            <ActionButton
                                onClick={onClick}
                                theme={'primary'}
                                shape={'pill'}
                                size={'big'}
                                map={ref.current!}
                            />
                        )}
                </div>
            )}
        </div>
    )
}

export default Index
