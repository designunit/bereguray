import { NextPage } from "next"
import { Button } from "src/components/Button"
import { useEffect, useRef, useCallback, useState } from "react"
import { LatlngMap, OnReady, LatlngController } from "src/components/LatlngMap"
import { Modal } from "src/components/Modal"
import { OpinionForm } from "src/components/OpinionForm"

const Index: NextPage = props => {
    const ref = useRef<LatlngController>()
    const [ready, setReady] = useState(false)
    const [showInputForm, setShowInputForm] = useState(false)

    const onClick = async () => {
        const map = ref.current!
        // console.log('click', map)

        const point = await map.pickPoint('get', 'point')
        console.log('point', point)

        setShowInputForm(true)
    }

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
                <OpinionForm></OpinionForm>
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