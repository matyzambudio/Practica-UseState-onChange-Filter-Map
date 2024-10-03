import React from "react";
import { useState } from "react";

export default function Perfumeria() {
  const articulos = [
    {
      nombre: "Eau de Toilette Chanel No. 5",
      marca: "Chanel",
      tipo: "Eau de Toilette",
      cantidad: "100 ml",
      precio: 12500,
    },
    {
      nombre: "Acqua di Gioia",
      marca: "Giorgio Armani",
      tipo: "Eau de Parfum",
      cantidad: "50 ml",
      precio: 8500,
    },
    {
      nombre: "Dior Sauvage",
      marca: "Dior",
      tipo: "Eau de Toilette",
      cantidad: "60 ml",
      precio: 9500,
    },
    {
      nombre: "La Vie Est Belle",
      marca: "Lancôme",
      tipo: "Eau de Parfum",
      cantidad: "75 ml",
      precio: 9800,
    },
    {
      nombre: "Light Blue",
      marca: "Dolce & Gabbana",
      tipo: "Eau de Toilette",
      cantidad: "100 ml",
      precio: 7000,
    },
    {
      nombre: "Black Opium",
      marca: "Yves Saint Laurent",
      tipo: "Eau de Parfum",
      cantidad: "90 ml",
      precio: 11500,
    },
  ];
  const [inputvalor, setInputvalor] = useState("");
  const [estado, setEstado] = useState([]);

  const nuevovalor = (e) => {
    const newvalue = e.target.value;
    setInputvalor(newvalue);
    cambiastage(newvalue);
  };

  const cambiastage = (newvalue) => {
    const filtrado = articulos.filter((art) =>
      art.nombre.toLowerCase().includes(newvalue.toLowerCase())
    );
    setEstado(filtrado);
  };

  return (
    <div>
      <div className="container">
        <input type="text" value={inputvalor} onChange={nuevovalor} />
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
          {estado.map((art) => (
            <div key={art} className="menumap">
              <h2 className="datomenu">{art.nombre}</h2>
              <h3 className="datomenu">{art.marca}</h3>
              <h3 className="datomenu">{art.tipo}</h3>
              <h3 className="datomenu">{art.cantidad}</h3>
              <h3 className="datomenu">{art.precio}</h3>
            </div>
          ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
