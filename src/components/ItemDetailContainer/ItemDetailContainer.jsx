//import {casas} from "../../db/casas.js";
import "./ItemDetailContainer.css"
import { useParams } from "react-router-dom";
import { getProducts } from "../../db/casas.js";
import { useState,useEffect } from "react";


const ItemDetailContainer = () => {
    const {productId} = useParams();
    const [casas, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
            .then( res => {
                setProducts(res);
                
            })
    },[casas])
    
    if (casas===undefined || casas.length===0) {return (<div>Cargando</div>)}
    console.log(casas);

    const casa = casas[productId];
    return (
        <div className="card col col-lg-4 py-3 m-3 imagenes detalle">
            <img src={casa.miniatura} alt={casa.titulo} className="card-img-top" />
            <div className="card-body">
                <h5 className="card-title">{casa.titulo}</h5>
                <p className="card-text">
                    <strong>Metros:</strong> {casa.metros} m²<br />
                    <strong>Ubicación:</strong> {casa.ubicacion}<br />
                    <strong>Constructor:</strong> {casa.constructora}<br />
                    <strong>Calculista:</strong> {casa.calculista}<br />
                    <strong>Precio:</strong> {casa.precio}
                </p>
            </div>
        </div>
    );
};

export default ItemDetailContainer;