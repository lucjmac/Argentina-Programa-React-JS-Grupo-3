import React from "react";
import Servicio from "../Content/Servicio";

const Servicios = () => {
    return (
        <>
            <h3>SERVICIOS</h3>
            <div className="card-servicios">
                <div className="card-content">
                    {" "}
                    <Servicio
                        nombre="Starter"
                        descripcion="Ideal para negocios en pleno crecimiento"
                        precio="$25/mes"
                        item1="Emails transaccionales"
                        item2="Campañas SMS y WhatsApp"
                        item3="Informes y análisis esencialess"
                    />
                </div>
                <div className="card-content">
                    {" "}
                    <Servicio
                        nombre="Business"
                        descripcion="Perfecto para grandes empresas ecommerce"
                        precio="$100/mes"
                        item1="Marketing automation"
                        item2="Estadísticas avanzadas"
                        item3="Soporte por teléfono"
                    />
                </div>
                <div className="card-content">
                    {" "}
                    <Servicio
                        nombre="Enterprise"
                        descripcion="Para empresas con necesidades específicas"
                        precio="$125/mes"
                        item1="Seguridad a nivel empresarial"
                        item2="Soporte personalizado"
                        item3="Integraciones avanzadas"
                    />
                </div>
                <div className="card-content">
                    {" "}
                    <Servicio
                        nombre="Premium"
                        descripcion="Especial para empresas multinacionales"
                        precio="$175/mes"
                        item1="Contrato flexible"
                        item2="Optimización 24/7"
                        item3="Acceso multiusuario"
                    />
                </div>
            </div>
        </>
    );
};

export default Servicios;
