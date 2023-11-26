import React, { useState } from "react";
import '../../assets/css/contact.css';

const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [edad, setEdad] = useState("");
    const [errorEnviar, setErrorEnviar] = useState(false);

    const errorMensaje = validacionDatos(nombre, apellido, email, edad);

    const manejarEnvio = (evento) => {
        evento.preventDefault();
        if (!errorMensaje) {
            alert("Formulario Enviado");
            setNombre("");
            setApellido("");
            setEmail("");
            setEdad("");
            setErrorEnviar(false);
        } else {
            setErrorEnviar(true);
        }
    };

    return (
        <form onSubmit={manejarEnvio}>
            <div className="label-input-container">
                <label htmlFor="nombre">Nombre: </label>
                <input
                    id="nombre"
                    type="text"
                    onChange={(evento) => setNombre(evento.target.value)}
                    value={nombre}
                    autoComplete="off"
                    name="nombre"
                    placeholder="Escriba su nombre..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="apellido">Apellido: </label>
                <input
                    id="apellido"
                    type="text"
                    onChange={(evento) => setApellido(evento.target.value)}
                    value={apellido}
                    autoComplete="off"
                    name="apellido"
                    placeholder="Escriba su apellido..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="email">Email: </label>
                <input
                    id="email"
                    type="text"
                    onChange={(evento) => setEmail(evento.target.value)}
                    value={email}
                    autoComplete="off"
                    name="email"
                    placeholder="Escriba su email..."
                />
            </div>
            <div className="label-input-container">
                <label htmlFor="edad">Edad: </label>
                <input
                    id="edad"
                    type="number"
                    onChange={(evento) => setEdad(evento.target.value)}
                    value={edad}
                    autoComplete="off"
                    name="edad"
                />
            </div>
            <p>{errorMensaje}</p>
            <button type="submit" disabled={!!errorMensaje}>
                Enviar
            </button>
        </form>
    );
};

const validacionDatos = (nombre, apellido, email, edad) => {
    if (nombre === "") return "Por favor, ingrese su nombre";
    if (apellido === "") return "Por favor, ingrese su apellido";
    if (!email.includes("@")) return "Por favor, ingrese un mail válido";
    if (edad === "") return "Por favor, ingrese su edad";
    return null;
};

export default Formulario;