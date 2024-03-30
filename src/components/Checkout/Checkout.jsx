import { useCart } from "../../../context/CartContext";
import { useCasa } from "../../../context/CasaContext";
import { CheckoutItem } from "../CheckoutItem/CheckoutItem";
import { Link } from "react-router-dom";
import "./Checkout.css";

export const Checkout = () => {
    const { cart,isInCart } = useCart();
    const { casasCol } = useCasa();

    console.log();

    return (
        <>
        { cart.length 
        ? <div className="container mt-4" style={{minHeight:"85vh"}}>
            <h1 className="mb-5">Resumen de Compra</h1>
            <table className="table table-borderless">
                <thead className="thead-dark">
                    <tr>
                        <th className="align-middle text-center" scope="col">
                            Producto
                        </th>
                        <th className="align-middle text-center" scope="col">
                            Descripción
                        </th>
                        <th className="align-middle text-center" scope="col">
                            Cantidad
                        </th>
                        <th className="align-middle text-center" scope="col">
                            Precio Unitario
                        </th>
                        <th className="align-middle text-center" scope="col">
                            Precio
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <CheckoutItem cart={cart} casasCol={casasCol} />
                </tbody>
            </table>
            <div className="d-flex justify-content-end">
                <Link
                    to={`/coder_54040_react/checkout/pago`}
                    className="btn btn-primary"
                    style={{ marginBottom: "0.5rem" }}
                >
                    Siguiente
                </Link>
            </div>
        </div>
        : <div className="container mt-4" style={{minHeight:"85vh"}}>
            <h1 className="mb-5">El carrito esta vacio</h1>
        </div>
        }
        </>
    );
};
