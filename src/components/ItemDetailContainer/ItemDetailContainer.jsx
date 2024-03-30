//import {casas} from "../../db/casas.js";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
//import { getProducts } from "../../db/casas.js";
import { useState, useEffect } from "react";
import { useCasa } from "../../../context/CasaContext.jsx";
import { ItemCount } from "../ItemCount/ItemCount.jsx";
import { casasColeccion } from "../../../services/firebase/casas.js";


const ItemDetailContainer = () => {
    const { productId } = useParams();
    //const [casas, setProducts] = useState([]);
    const { casasCol, setCasa } = useCasa();
    console.log("aver algo")
    console.log(casasCol)


    useEffect(() => {

        const obtenerCasas = async () => {
            try {
                const resultadoCasas = await casasColeccion();
                setCasa((resultadoCasas));
            } catch (error) {
                console.error("Error al obtener datos de casas:", error);
            }
        };

        if (casasCol === undefined || casasCol.length === 0) obtenerCasas();
    }, [])

    if (casasCol === undefined || casasCol.length === 0) { return (<div style={{minHeight:"85vh"}}>Cargando</div>) }

    const casa = casasCol.find((objeto) => objeto.id === productId)
    return (
        <>
            {casa
                ? (
                    <div className="card col col-lg-4 py-3 m-3 imagenes detalle" style={{minHeight:"85vh"}}>
                        <img src={casa.miniatura} alt={casa.titulo} className="card-img-top" />
                        <div className="row card-body">
                            <div className="col" >
                                <h5 className="card-title">{casa.titulo}</h5>
                                <p className="card-text">
                                    <strong>Metros:</strong> {casa.metros} m²<br />
                                    <strong>Ubicación:</strong> {casa.ubicacion}<br />
                                    <strong>Constructor:</strong> {casa.constructora}<br />
                                    <strong>Calculista:</strong> {casa.calculista}<br />
                                    <strong>Precio:</strong> {casa.precio}
                                </p>
                            </div>
                            <div className="col" style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", alignItems: "space-evenly", justifyContent: "space-evenly" }}>
                                <ItemCount {...casa} />
                            </div>
                        </div>
                    </div>
                )
                : (<div style={{minHeight:"85vh"}}>Producto no encontrado</div>)
            }

        </>);
};

export default ItemDetailContainer;