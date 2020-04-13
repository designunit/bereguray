import { NextPage } from "next"
import { Button } from "src/components/Button"
import { useEffect, useRef, useCallback, useState } from "react"
import { LatlngMap, OnReady, LatlngController } from "src/components/LatlngMap"
import { Modal } from "src/components/Modal"
import { OpinionForm, OpitionFormData } from "src/components/OpinionForm"
import { OnSubmit } from "react-hook-form"

type Coord = {
    lat: number,
    lng: number,
} 

const Index: NextPage = props => {
    const ref = useRef<LatlngController>()
    const [ready, setReady] = useState(false)
    const [coord, setCoord] = useState<Coord>()
    const [showInputForm, setShowInputForm] = useState(false)

    const onClick = async () => {
        const map = ref.current!

        const point = await map.pickPoint('Кликни по карте', 'что-то произойдет')
        console.log('point', point)

        setCoord(point)
        setShowInputForm(true)
    }

    const onSubmit = useCallback<OnSubmit<OpitionFormData>>(async values => {
        console.log(values, coord)
        const c = coord!

        const map = ref.current!

        const ok = await map.addFeature({
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [c.lng, c.lat]
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
                        shape={'pill'}
                        size={'big'}
                    >Добавляем и пляшем</Button>
                </div>
            )}
        </div>
    )
}

export default Index
