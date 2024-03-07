import Item from "../Item/Item"
import { useParams } from "react-router-dom"
import "./ItemList.css"
import {getProducts} from "../../db/casas.js";
import { useEffect,useState } from "react";


const ItemList= () => {
    const {categoryId} = useParams();
    const [casas, setProducts] = useState([]);

    useEffect(()=>{
        getProducts()
            .then( res => {
                setProducts(res);
            })
    },[casas])

    const ordenarPorMetraje = (arregloCasas) => {
        // Utiliza el método sort() para ordenar las casas según su metraje
        arregloCasas.sort((casaA, casaB) => casaA.metros - casaB.metros);
        // Devuelve el arreglo ordenado
        return arregloCasas;
    };

    const ordenarPorPrecio = (arregloCasas) => {
        arregloCasas.sort((casaA, casaB) => casaA.precio - casaB.precio);
        return arregloCasas;
    };

    const ordenarPorID = (arregloCasas) => {
        arregloCasas.sort((casaA, casaB) => casaA.id - casaB.id);
        return arregloCasas;
    };

    const ordenarPorUbicacion = (arregloCasas) => {
        arregloCasas.sort((casaA, casaB) => {
            // Comparación de cadenas de texto (ubicación)
            return casaA.ubicacion.localeCompare(casaB.ubicacion);
        });
        return arregloCasas;
    };

    if (casas===undefined || casas.length===0) {return (<div>Cargando</div>)}
    if(categoryId === "metros") {
        let casasFiltro = ordenarPorMetraje(casas);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }

    if(categoryId === "precio") {
        let casasFiltro = ordenarPorPrecio(casas);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }

    if(categoryId === "proyectos") {
        let casasFiltro = ordenarPorID(casas);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }

    if(categoryId === "ubicacion") {
        let casasFiltro = ordenarPorUbicacion(casas);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }
}
export default ItemList