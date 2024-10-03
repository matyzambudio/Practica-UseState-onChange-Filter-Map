import React from "react";
import { useState } from "react";
import "./App.css";

export default function Electronica() {
  const [estado, setEstado] = useState([]);
  const [valor, setValor] = useState("");

  const mercaderia = [
    {
      nombre: "Smartphone",
      marca: "Samsung",
      modelo: "Galaxy S21",
      precio: 79999,
    },
    {
      nombre: "Laptop",
      marca: "Apple",
      modelo: 'MacBook Pro 14"',
      precio: 199999,
    },
    {
      nombre: "Auriculares",
      marca: "Sony",
      modelo: "WH-1000XM4",
      precio: 34999,
    },
    {
      nombre: "Televisor",
      marca: "LG",
      modelo: "OLED55CXPUA",
      precio: 149999,
    },
    {
      nombre: "Tableta",
      marca: "Microsoft",
      modelo: "Surface Pro 7",
      precio: 74999,
    },
    {
      nombre: "Reloj Inteligente",
      marca: "Apple",
      modelo: "Watch Series 7",
      precio: 39999,
    },
    {
      nombre: "Cámara",
      marca: "Canon",
      modelo: "EOS R6",
      precio: 249999,
    },
  ];

  const r = (e) => {
    const dato = e.target.value;
    setValor(dato);
    cambio(dato);
  };
  const cambio = (dato) => {
    const r = mercaderia.filter((art) =>
      art.nombre.toUpperCase().includes(dato.toUpperCase())
    );
    setEstado(r);
  };

  return (
    <div>
        <div className="container">
        <input type="text" value={valor} onChange={r} />
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
                <h2 className="datomenu">{art.nombre}</h2>
                <h2 className="datomenu">{art.marca}</h2>
                <h2 className="datomenu">{art.modelo}</h2>
                <h2 className="datomenu">{art.precio}</h2>
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
