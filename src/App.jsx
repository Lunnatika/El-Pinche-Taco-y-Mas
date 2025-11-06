import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './componentes/Header/Header';
import { Footer } from './componentes/Footer/Footer';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './componentes/Cart/Cart';
import { ProductFormContainer } from './componentes/adminComponents/ProductFormContainer/ProductFormContainer';



function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
        <Header />
        {/*dejamos fuera del router el header y el footer para que no se recarguen , o todo lo que no queremos que se renderice al navegar*/}
        <Routes>
          {/* le paso el titulo por props */}
          <Route path="/"
          element= {<ItemListContainer titulo={"Bienvenidos"}/>}
          />
          <Route path="/category/:category"
          element= {<ItemListContainer titulo={"Bienvenidos"}/>}
          />
          {/* le paso el id por params */}
          <Route path="/detail/:id" 
          element= {<ItemDetailContainer/>}
          />
          <Route path="/carrito"
          element= {<Cart/>}/>
        
          <Route path="/admin"
          element= {<ProductFormContainer/>}/>
          
        </Routes>

        <Footer />
      
      </CartProvider>
      
    </BrowserRouter>
    </>
  );
}

export default App;
