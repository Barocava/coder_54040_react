import { useCart } from "../../../context/CartContext";
import { Link } from 'react-router-dom';

const CarWidget = () => {
    const {totalQuantity} = useCart();

    return (


<Link to={"/coder_54040_react/checkout"} className="position-relative">
  <i className="bi bi-cart"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {totalQuantity}
    <span className="visually-hidden">productos en el carrito</span>
  </span>
</Link>
    )
}

export default CarWidget