import { useCart } from "../../../context/CartContext";

export const CheckoutItem = ({cart,casasCol }) => {
    const totalAmoung = (productos) => {
        let acu = 0;
        for(const producto of productos) {
            acu = acu + (producto.stock * producto.precio);
        }
        return acu;
    }
    const {removeItem} = useCart();

    const productos = [];
    for (const objeto of cart) {
        const producto = casasCol.find((obj) => obj.id === objeto.id);
        producto.stock = objeto.stock;
        productos.push(producto);
    }
    console.log(productos);
    return (
        <>
            {productos.map((prod) => {
                return (
                    <tr key={prod.id}>
                        <td className="align-middle">
                            <img
                                className="p-3 rounded border-0"
                                style={{
                                    maxWidth: "325px",
                                    objectFit: "cover",
                                    borderRadius: "8px",
                                }}
                                src={`${prod.miniatura}`}
                                alt={`${prod.titulo}`}
                            />
                        </td>
                        <td className="align-middle">
                            <strong>Metros: </strong> {`${prod.metros}`} m²,
                            <strong> Ubicación: </strong> {`${prod.ubicacion}`},
                            <strong> Constructor: </strong>
                            {`${prod.constructora}`},<strong> Calculista: </strong>{" "}
                            {`${prod.calculista}`}
                        </td>
                        <td className="align-middle">{`${prod.stock}`}</td>
                        <td className="align-middle">${`${prod.precio}`}</td>
                        <td className="align-middle">${`${prod.precio * prod.stock}`}</td>
                        <td className="align-middle"><button type="button" onClick={() => removeItem(prod.id)} className="btn btn-danger mx-3">-</button></td>
                    </tr>
                );
            })}
            <tr>
                <td className="align-middle"></td>
                <td className="align-middle"></td>
                <td className="align-middle"></td>
                <td className="align-middle"></td>
                <td className="align-middle">
                    <strong>Total: </strong>
                </td>
                <td className="align-middle">${`${totalAmoung(productos)}`}</td>
            </tr>
        </>
    );
};
