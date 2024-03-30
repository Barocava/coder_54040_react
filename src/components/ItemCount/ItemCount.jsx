import { useEffect, useState } from "react"
import "./ItemCount.css"
import { useCart } from "../../../context/CartContext";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import { Link } from "react-router-dom";

export const ItemCount = ({id}) => {
    const [estado, setEstado] = useState(0);

    const {cart, addItem, isInCart} = useCart();

/*     useEffect(() => {
        if(estado > 0){
            addItem({id,stock:estado})
        }
    }
    ,[]) */

    const incrementar = () => {
        if(estado<10) setEstado((prev) => prev + 1)
    }
    const decrementar = () => {
        if(estado>0) setEstado((prev) => prev - 1)
    }
    const carrito = () => {
        if(estado>0) {
        console.log({id,stock:estado});
        addItem(({id,stock:estado}))
        console.log(cart);
        }
    }

    
    return <>
        <section className="d-flex justify-content-evenly">
            <Link to="/coder_54040_react/category/proyectos" className="btn btn-primary" >Volver</Link>
            {!isInCart(id) ? 
            <>
            <button type="button" onClick={decrementar} className="btn btn-primary mx-3">-</button>
            <h4>{`${estado}`}</h4>
            <button type="button" onClick={incrementar} className="btn btn-primary mx-3" >+</button>
            <button type="button" onClick={carrito} className="btn btn-primary">Agregar </button>
            </>
            : <>
            <Link to="/coder_54040_react/checkout" className="btn btn-primary" >Ir al carrito</Link>
            </>
            }
        </section>

    </>
}