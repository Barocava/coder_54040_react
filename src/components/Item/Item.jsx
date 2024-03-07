import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ casa }) => {
  return (
    <div className="card col col-lg-4 py-3 m-3">
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
        <div className="acerca_botones" style={{ paddingBlock: "0rem" }}>
          <Link to={`/coder_54040_react/detail/${casa.id}`} className="btn btn-primary" style={{ width: "60%", marginBottom: "0.5rem" }}>
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
