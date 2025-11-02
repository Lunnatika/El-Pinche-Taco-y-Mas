import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";
import { Item } from "../Item/Item";
import Boton from "../Boton";
import "./Cart.css";

export const Cart = () => {
  const { cart, deleteItem, clearCart, getTotalPrice, checkout } = useContext(CartContext);

  return (
    <section className="cart-container">
      <h2>Carrito de compras</h2>

      {cart.length ? (
        cart.map((prod) => (
          <Item key={prod.id} {...prod}>
            <span>Cantidad: {prod.quantity}</span>
            <button onClick={() => deleteItem(prod.id)}>Eliminar</button>
          </Item>
        ))
      ) : (
        <p>El carrito está vacío</p>
      )}

      {cart.length ? (
        <div className="cart-summary">
          <div className="total-price">
            <p>Total a pagar: ${getTotalPrice()}</p>
          </div>
          <Boton texto="Finalizar compra" onClick={checkout} />
          <Boton texto="Vaciar carrito" onClick={clearCart} />
        </div>
      ) : (
        <Link className="back-to-shop" to="/">Volver al inicio</Link>
      )}
    </section>
  );
};
