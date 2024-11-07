import "../index.css";
const Card = ({ nombre, apellido, edad }) => {
  return (
    <div className="card">
      <h2>Datos Ingresados</h2>
      <p>
        <h2>Nombre: {nombre}</h2>{" "}
      </p>
      <p>
        <h2>Apellido: {apellido}</h2>
      </p>
      <p>
        <h2>Edad: {edad}</h2>
      </p>
    </div>
  );
};

export default Card;
