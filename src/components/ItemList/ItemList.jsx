import Item from "../Item/Item"
import { useParams } from "react-router-dom"
import "./ItemList.css"
import { useEffect,useState } from "react";
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../../../services/firebase/index.js";
import { casasColeccion } from "../../../services/firebase/casas.js";
import { useCasa } from "../../../context/CasaContext.jsx";

const ItemList = () => {
    const {categoryId} = useParams();
    const [casas, setProducts] = useState([]);
    const {setCasa} = useCasa();

    useEffect( () => {
/*         const itemsCollection = collection(db, "casas");
        getDocs(itemsCollection).then((snapshot) => {
            if(snapshot.size === 0) console.log("No existen registros");
            setProducts(snapshot.docs.map((doc)=> ({ id: doc.id, ...doc.data() })));
            console.log(casas);
            }); */
        const obtenerCasas = async () => {
            try {
                const resultadoCasas = await casasColeccion();
                setProducts(resultadoCasas);
                setCasa(resultadoCasas);
            } catch (error) {
                console.error("Error al obtener datos de casas:", error);
            }
        };
        obtenerCasas();
    },[])

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

    if (casas===undefined || casas.length===0) {return (<div style={{minHeight:"85vh"}}>Cargando</div>)}
    if(categoryId === "metros") {
        let casasFiltro = ordenarPorMetraje([...casas]);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }

    if(categoryId === "precio") {
        let casasFiltro = ordenarPorPrecio([...casas]);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }

    if(categoryId === "proyectos") {
        let casasFiltro = ordenarPorID([...casas]);
        return (
            <div className="row mx-0 justify-content-evenly align-items-center carta">
                {casasFiltro.map(casa => (
                    <Item key={casa.id} casa={casa} />
                    ))}
            </div>
        )
    }

    if(categoryId === "ubicacion") {
        let casasFiltro = ordenarPorUbicacion([...casas]);
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