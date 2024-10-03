import React from "react";
import { useState } from "react";

export default function Libreria() {
  const [inputvalor, setInputvalor] = useState("");
  const [cambio, setCambio] = useState([]);

  const productos = [
    {
      nombre: "Cuaderno universitario",
      precio: 2.5,
      cantidad: 100,
      categoria: "papelería",
    },
    {
      nombre: "Lápiz grafito",
      precio: 0.5,
      cantidad: 200,
      categoria: "escritura",
    },
    {
      nombre: "Bolígrafo azul",
      precio: 1.0,
      cantidad: 150,
      categoria: "escritura",
    },
    {
      nombre: "Resaltador amarillo",
      precio: 1.2,
      cantidad: 75,
      categoria: "marcadores",
    },
    {
      nombre: "Papel para fotocopia A4",
      precio: 4.0,
      cantidad: 50,
      categoria: "papelería",
    },
    {
      nombre: "Grapadora",
      precio: 5.0,
      cantidad: 30,
      categoria: "oficina",
    },
    {
      nombre: "Tijeras",
      precio: 3.0,
      cantidad: 40,
      categoria: "oficina",
    },
    {
      nombre: "Post-it",
      precio: 2.0,
      cantidad: 60,
      categoria: "papelería",
    },
    {
      nombre: "Carpeta de anillas",
      precio: 3.5,
      cantidad: 80,
      categoria: "organización",
    },
    {
      nombre: "Marcadores permanentes",
      precio: 4.0,
      cantidad: 45,
      categoria: "marcadores",
    },
  ];

  const ingreso = (e) => {
    const nuevo = e.target.value;
    setInputvalor(nuevo);
    cambiar(nuevo);
  };
  const cambiar = (nuevo) => {
    const resultado = productos.filter((art) =>
      art.nombre.toLocaleUpperCase().includes(nuevo.toLocaleUpperCase())
    );
    setCambio(resultado);
  };

  return (
  <div>
    <div className="container">
      <input type="text" value={inputvalor} onChange={ingreso} />
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
          {cambio.map((art, i) => (
            <div key={i} className="menumap">
                <h1 className="datomenu">{art.nombre}</h1>
                <h2 className="datomenu">{art.precio}</h2>
                <h2 className="datomenu">{art.cantidad}</h2>
                <h2 className="datomenu">{art.categoria}</h2>
              </div>
          ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
