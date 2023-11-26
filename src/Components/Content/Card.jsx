import '../../assets/css/card.css'
import { contenido } from './Objetos'

const Card = () => {

    return (
        <>
            <div>
                <ul className="image-section">
                    {
                    // eslint-disable-next-line react/jsx-key
                    contenido.map(contenido => 
                     // eslint-disable-next-line react/jsx-key

                    <div className="row align-items-center image-container  first-image-container">
                        <div className="col-md-3">
                            <img
                                src={contenido.imagen}
                                alt="Imagen 1"
                                className=" image"
                            />
                        </div>
                        <div className="col-md-9">
                            <div className="image-description">
                            <h2>{contenido.titulo}</h2>
                            <p >
                            {contenido.txt}
                            </p>
                            </div>
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