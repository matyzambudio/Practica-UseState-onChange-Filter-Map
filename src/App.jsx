import './App.css';
import Electronica from './Electronica'
import Libreria from './Libreria'
import Bebidas from './Bebidas';
import Mercaderia from './Mercaderia'
import Perfumeria from './Perfumeria'
import Galletas from './Galletas'

const App = () => {
  return (
    <div>
      <Libreria />
      <Electronica />
      <Bebidas />
      <Mercaderia/>
      <Perfumeria/>
      <Galletas  />
     
    </div>
  );
};

export default App;
