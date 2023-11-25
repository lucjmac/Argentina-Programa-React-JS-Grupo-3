import React from "react";
import "../../assets/css/home.css";

const Home = () => {
    return (
        <>
            <div className="hero">
                <a className="hero-link" href="./Nosotros.jsx">
                    CONOCENOS
                </a>
            </div>

            <div className="image-section">
                <div className="image-container first-image-container">
                    <img
                        src="src\assets\img\social-media.png"
                        alt="Imagen 1"
                        className="image"
                    />
                    <p className="image-description">
                    En Cactus Social Media, entendemos que la clave no es solo crecer, sino florecer. Nuestra experiencia y pasión por la creatividad nos convierten en el socio ideal para hacer que tu marca destaque en el vasto paisaje de las redes sociales.
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="src\assets\img\marketing.png"
                        alt="Imagen 2"
                        className="image"
                    />
                    <p className="image-description">
                    En Cactus, cultivamos estrategias que florecen. Somos una agencia que se dedicada a transformar marcas en oasis de éxito. Nuestro equipo de expertos en marketing trabaja en sintonía para crear campañas innovadoras y estrategias que destacan en el árido paisaje de la competencia.

                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
