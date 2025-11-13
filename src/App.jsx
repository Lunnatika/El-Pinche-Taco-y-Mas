import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './componentes/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext/CartProvider';
import { Cart } from './componentes/Cart/Cart';
import { ProductFormContainer } from './componentes/adminComponents/ProductFormContainer/ProductFormContainer';
import { MainLayout } from './layouts/MainLayout';
import { AdminLayouts } from './layouts/AdminLayouts';
import { Login } from './componentes/Login/Login';
import { RutaProtegida } from './componentes/RutaProtegida/RutaProtegida';



function App() {

  return (
    <>
    <BrowserRouter>
    <CartProvider>
        
        {/*dejamos fuera del router el header que ahora esta en el main y el footer para que no se recarguen , o todo lo que no queremos que se renderice al navegar*/}
        <Routes>
          <Route element={<MainLayout />}>
            {/* le paso el titulo por props */}
            <Route
              path="/"
              element={<ItemListContainer titulo={"Bienvenidos"} />}
            />
            <Route
              path="/category/:category"
              element={<ItemListContainer titulo={"Bienvenidos"} />}
            />
            {/* le paso el id por params */}
            <Route
              path="/detail/:id"
              element={<ItemDetailContainer />}
            />
            <Route
              path="/carrito"
              element={<Cart />}
            />
            </Route>

            <Route path="/admin" element={<AdminLayouts/>}>
            <Route index element={<Login />} />

            <Route
           path = "alta-productos"
            element={
              <RutaProtegida>
                <ProductFormContainer/>
            </RutaProtegida>
            }
            />
          </Route>
            
          
        </Routes>

        
      
      </CartProvider>
      
    </BrowserRouter>
    </>
  );
}

export default App;
