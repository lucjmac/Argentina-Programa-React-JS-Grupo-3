import React from "react";
import "../../assets/css/nosotros.css";
import Crecimiento from "../../assets/img/crecimiento.jpg";
import Estretegia from "../../assets/img/estrategia-marketing.jpg";

const Nosotros = () => {
    return (
        <>
            <h3>NOSOTROS</h3>
            <div className="container_nosotros">
                <div>
                    <h2>¿Quienes somos?</h2>
                    <p>
                        "En Cactus, la esencia de nuestro éxito radica en
                        décadas de dedicación al arte del marketing. Con una
                        sólida trayectoria en el mercado, hemos cultivado
                        estrategias que florecen, transformando marcas en oasis
                        de relevancia. Nuestro equipo experto fusiona
                        creatividad y conocimiento para diseñar campañas
                        impactantes. En el vasto desierto del mercado, somos el
                        oasis de innovación. Descubre con nosotros un viaje de
                        marketing único, donde la experiencia se convierte en
                        éxito tangible para cada cliente."
                    </p>
                </div>
                <div>
                    <img
                        src={Crecimiento}
                        alt="graficos-crecimiento"
                        className="image-nosotros"
                    />
                </div>
            </div>
            <div className="container_nosotros">
                <div>
                    <img
                        src={Estretegia}
                        alt="graficos-crecimiento"
                        className="image-nosotros"
                    />
                </div>
                <div>
                    <h2>¿A que nos dedicamos?</h2>
                    <p>
                        "En el vibrante mundo del marketing, Cactus destaca como
                        una firma única. Somos más que una agencia; somos
                        arquitectos de historias de éxito. Nuestra pasión radica
                        en transformar ideas en impacto, cultivando estrategias
                        que florecen en el terreno competitivo. Con años de
                        experiencia, nuestro equipo creativo fusiona visión y
                        ejecución para posicionar marcas en lo más alto.
                        Descubre el oasis de innovación con Cactus, donde cada
                        campaña es una expresión artística que impulsa tu marca
                        hacia nuevos horizontes."
                    </p>
                </div>
            </div>
        </>
    );
};

export default Nosotros;
