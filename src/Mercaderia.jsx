import React, { useState } from "react";
import "./App.css";
export default function Mercaderia() {
  const [buscar, setBuscar] = useState([]);
  const [valor, setValor] = useState("");

  const mercaderia = [
    "arroz",
    "pasta",
    "lentejas",
    "aceite de oliva",
    "sal",
    "azúcar",
    "harina",
    "tomates enlatados",
    "atún enlatado",
    "cereal",
    "leche",
    "yogur",
    "queso",
    "frutas en conserva",
    "verduras congeladas",
    "snacks",
    "galletas",
    "mantequilla",
    "chocolates",
    "bebidas azucaradas",
  ];
  const encontrar = (palabra) => {
    const resul = mercaderia.filter((art) =>
      art.toLocaleLowerCase().includes(palabra.toLocaleLowerCase())
    );
    setBuscar(resul);
  };
  const cambio = (e) => {
    const palabra = e.target.value;
    setValor(palabra);
    encontrar(palabra);
  };

  return (
    <div>
      <div className="container">
        <input type="text" value={valor} onChange={cambio} />
        <div>
          <div>
          <div className="menu">
            <h2 className="datomenu">Nombre</h2>
            <h3 className="datomenu">Marca</h3>
            <h3 className="datomenu">Tipo</h3>
            <h3 className="datomenu">Cantidad</h3>
            <h3 className="datomenu">Precio</h3>
          </div>
          <div>
            {buscar.map((mer, i) => (
              <div key={i} className="menumap">
                <h2 className="datomenu">{mer}</h2>
                <h2 className="datomenu">vacio</h2>
                <h2 className="datomenu">vacio</h2>
                <h2 className="datomenu">vacio</h2>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
