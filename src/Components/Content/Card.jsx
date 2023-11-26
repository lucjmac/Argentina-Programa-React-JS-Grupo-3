import '../../assets/css/card.css'
import { contenido } from './Objetos'

const Card = () => {

    return (
        <>
            <div>
                <ul className="flex gap-3 justify-center">
                    {
                    // eslint-disable-next-line react/jsx-key
                    contenido.map(contenido => 
                     // eslint-disable-next-line react/jsx-key
                    <div className="image-section">
                        <div className="image-container">
                            <img
                                src={contenido.imagen}
                                alt="Imagen 1"
                                className="image"
                            />
                            <h2>{contenido.titulo}</h2>
                            <p className="image-description">
                            {contenido.txt}
                            </p>
                        </div>
                    </div>
                    )
                    }
                </ul>
            </div>
        </>
    )
}

export default Card