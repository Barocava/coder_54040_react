const CarWidget = ({stock}) => {

    const handleClick = (event) =>{
        event.preventDefault();
    }

    return (

<a href="" className="position-relative" onClick={handleClick}>
  <i className="bi bi-cart"></i>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {stock}
    <span className="visually-hidden">productos en el carrito</span>
  </span>
</a>
    )
}

export default CarWidget