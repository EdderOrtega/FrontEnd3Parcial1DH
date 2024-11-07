import { useState } from "react";
import Card from "./Card";
import "../index.css";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [error, setError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [edad, setEdad] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim().length < 3 || nombre[0] === " ") {
      setError("Por favor chequea que la información sea correcta");
      setIsSubmitted(false);
      return;
    }

    if (apellido.length < 6) {
      setError("Por favor chequea que la información sea correcta");
      setIsSubmitted(false);
      return;
    }
    setError("");
    setIsSubmitted(true);
  };
  const handleReset = () => {
    setNombre("");
    setApellido("");
    setEdad("");
    setError("");
    setIsSubmitted(false);
  };
  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          placeholder="Ingresa tu nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <label htmlFor="apellido">Apellido</label>
        <input
          type="text"
          placeholder="Ingresa tu apellido"
          id="apellido"
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <label className="labelEdad" htmlFor="edad">
          Edad
        </label>
        <input
          className="edad"
          type="number"
          id="edad"
          placeholder="Ingresa tu edad"
          value={edad}
          onChange={(e) => setEdad(e.target.value)}
          min="1"
          max="100"
        />

        <button type="submit">Enviar</button>
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handleReset}>
          Resetear
        </button>
        {isSubmitted && (
          <Card nombre={nombre} apellido={apellido} edad={edad} />
        )}
      </form>
    </div>
  );
};

export default Form;
