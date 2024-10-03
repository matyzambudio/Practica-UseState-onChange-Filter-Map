import { useState } from "react";
import "./App.css";

export default function Bebidas() {
  const [encontrar, setEncontrar] = useState([]);
  const [valueinput, setValueinput] = useState("");

  const bebidas = [
    "agua mineral",
    "refresco de cola",
    "jugo de naranja",
    "té helado",
    "cerveza",
    "vino tinto",
    "limonada",
    "batido de fresa",
    "bebida energética",
    "sidra",
  ];

  const busqueda = (valor) => {
    const resultados = bebidas.filter((art) =>
      art.toLocaleLowerCase().includes(valueinput.toLocaleLowerCase())
    );
    setEncontrar(resultados);
  };

  const cambio = (e) => {
    const valor = e.target.value;
    setValueinput(valor);
    busqueda(valor);
  };

  return (
    <div>
      <div className="container">
        <input type="text" value={valueinput} onChange={cambio}/>
      <div>
        <div>
        
      <div>
        {encontrar.map((art, i) => (
          <div key={i} className="menumap" >
              <h2 className="datomenu">{art}</h2>
              <h2 className="datomenu">Costo Mio Unidad</h2>
              <h2 className="datomenu">P.Venta Unidad/Kilo</h2>
          </div>
        ))}
        </div>
        </div>
        </div>
      </div>
    </div>
  );
}
