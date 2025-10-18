import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Componentes/Header/Header';
import { Footer } from './Componentes/Footer/Footer';
import { ItemListContainer } from './Componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';


function App() {
  //const prod = {nombre: "Taco", precio: 20, descripcion: "Delicioso taco de carnitas"}

  return (
    <>
    <BrowserRouter>
    <CartProvider>
      <div>
        <Header />
        {/*dejamos fuera del router el header y el footer para que no se recarguen , o todo lo que no queremos que se renderice al navegar*/}
        <Routes>
          {/* le paso el titulo por props */}
          <Route path="/"
          element= {<ItemListContainer titulo={"Bienvenidos"}/>}
          />
          {/* le paso el id por params */}
          <Route path="/detail/:id" 
          element= {<ItemDetailContainer/>}
          />
        </Routes>
        <Footer />
      </div>
      </CartProvider>
      
    </BrowserRouter>
    </>
  );
}

export default App;
