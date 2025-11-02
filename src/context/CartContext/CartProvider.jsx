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
           const updateCart = cart.map((prod) =() => {
            if(prod.id === item.id){
                return {...prod, quantity: prod.quantity + item.quantity};
            } else {
                return prod;
            }
            });
            setCart (updateCart);
            alert (`Se actualizaron los ${item.name} en el carrito`);
        } else {
        setCart ([...cart, item]);
        alert(`${item.name} agregado al carrito`);
        }
    };

/*Eliminar productos*/
const deleteItem = (id) => {
    const updatedCart = cart.filter((p) => p.id !== id);
    setCart (updatedCart);
    alert ("Producto eliminado del carrito");
    
}

/*Vaciar carrito*/
    const clearCart = () => {
        setCart ([]);
    };

/*Calcula el total de items en el carrito*/

    const getTotalItems = () => {//retorna la cantidad de productos en el carrito
        const totalItem =cart.reduce((acc, p) => acc + p.quantity, 0);
        return totalItem;
    };

/*Calcular total de la compra*/    
const getTotalPrice = () => {
    const totalPrice = cart.reduce((acc, p) => acc + p.quantity * p.price, 0);
    return Math.round (totalPrice * 100) / 100; //redondea a 2 decimales
}

const checkout =() => {
    const orderData = confirm ("Desea finalizar la compra?")
    if (orderData){
        alert ("Gracias por su compra");
        clearCart();
}
};

    const value = {cart, addItem, clearCart, getTotalItems, deleteItem, getTotalPrice, checkout };//guardo una referencia 
    return <CartContext.Provider value={value}> {/*paso la referencia como objeto */}
        {children}
    </CartContext.Provider> ;


}

