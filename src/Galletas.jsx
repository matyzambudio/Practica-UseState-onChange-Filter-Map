import React from "react";
import { useState } from "react";
import "./App.css";

export default function Galletas() {
  const lista = [
    "Oreo",
    "Chips Ahoy!",
    "Pepperidge Farm",
    "Milano",
    "Digestive",
    "Nabisco",
    "BelVita",
    "Famous Amos",
    "Lotus Biscoff",
    "Tate's Bake Shop",
    "Anna's Ginger Snaps",
    "Walkers",
    "Fig Newtons",
    "Girl Scout Cookies",
    "Keebler",
    "Biscoff",
    "Entenmann's",
    "Little Debbie",
    "Sunbelt Bakery",
    "Munchies",
  ];

  const [estado, setEstado] = useState([]);
  const [inputvalue, setInputvalue] = useState("");

  const cambio = (e) => {
    const newingreso = e.target.value;
    setInputvalue(newingreso);
    busqueda(newingreso);
  };

  const busqueda = (newingreso) => {
    const resultado = lista.filter((art) =>
      art.toLocaleLowerCase().includes(newingreso.toLocaleLowerCase())
    );
    setEstado(resultado);
  };

  return (
    <div>
      <div className="container">
        <input type="text" value={inputvalue} onChange={cambio} />
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
              {estado.map((art, i) => (
                <div key={i} className="menumap">
                  <h2 className="datomenu">{art}</h2>
                  <h2 className="datomenu">Vacio</h2>
                  <h2 className="datomenu">Vacio</h2>
                  <h2 className="datomenu">Vacio</h2>
                  <h2 className="datomenu">Vacio</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
