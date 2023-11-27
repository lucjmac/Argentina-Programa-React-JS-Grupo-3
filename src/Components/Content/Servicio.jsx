import { useState } from "react";
import "../../assets/css/servicios.css";

function Servicio(props) {
    const [contenido, setContenido] = useState(false);
    const toggleContenido = () => {
        setContenido(!contenido);
    };
    const comprar = () =>{
        alert("Gracias por adquirir nuestros servicios❗")
    }
    return (
        <>
            <div className="container_Servicios">
                <div>
                    <h2>{props.nombre}</h2>
                    <p>{props.descripcion}</p>
                    <p>
                        A partir de:
                        <span>
                            <p>{props.precio}</p>
                        </span>
                    </p>
                    <button onClick={toggleContenido}>Ver detalles</button>
                </div>
                <div
                    className={
                        contenido ? "container_Servicios--detalle" : "ocultar"
                    }
                >
                    <p>Todo lo que incluye:</p>
                    <p>✔️ {props.item1}</p>
                    <p>✔️ {props.item2}</p>
                    <p>✔️ {props.item3}</p>
                    <button onClick={comprar}>Adquirir!</button>
                </div>
            </div>
        </>
    );
}

export default Servicio;
