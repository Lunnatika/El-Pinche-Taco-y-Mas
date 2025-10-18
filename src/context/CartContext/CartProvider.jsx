import { CartContext } from "./CartContext";
import { useState } from "react";

export const CartProvider = ({ children }) => {//componente proveedor del contexto
    const [cart, setCart] = useState ([]);

    const exists = (id) => {//verifica si el producto ya existe en el carrito
        const exist = cart.some((p)=> p.id === id);//retorna true o false, some es equivalente a el for en python
            return exist;  
    }

    const addItem =(item) => {//agrega un item al carrito
        if (exists(item.id)) {//si el producto ya existe en el carrito
            alert("El producto ya fue agregado al carrito");
            return;//si el producto ya existe, no lo agrega y sale de la funcion
        }

        setCart ([...cart, item]);
        alert(`${item.nombre} agregado al carrito`);
    };
    const clearCart = () => {
        setCart ([]);
    };

    const getTotalItems = () => {//retorna la cantidad de productos en el carrito
        if (cart.length) {
            return cart.length;
        }
    };


    const value = {cart, addItem, clearCart, getTotalItems };//guardo una referencia 
    return <CartContext.Provider value={value}> {/*paso la referencia como objeto */}
        {children}
    </CartContext.Provider> ;


}

