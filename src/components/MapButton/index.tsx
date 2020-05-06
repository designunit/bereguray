import { useContext } from "react"
import { ConfigContext } from 'src/context/config'
import { Button } from "../Button"


export const MapButton: React.FC = props => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <Button
            size='big'
            theme='primary'
            href={mapUrl}
            style={{width: '200px'}}
        >
            Отметь идею на карте
        </Button>
    )
}