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
                        src="ruta_de_la_imagen_1"
                        alt="Imagen 1"
                        className="image"
                    />
                    <p className="image-description">
                        Descripción de la imagen 1
                    </p>
                </div>
                <div className="image-container">
                    <img
                        src="ruta_de_la_imagen_2"
                        alt="Imagen 2"
                        className="image"
                    />
                    <p className="image-description">
                        Descripción de la imagen 2
                    </p>
                </div>
            </div>
        </>
    );
};

export default Home;
