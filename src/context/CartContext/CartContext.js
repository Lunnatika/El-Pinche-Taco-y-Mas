//aqui generamos la creacion del contexto
import { createContext, useContext } from "react";

//Exporto el contexto creado porque lo voy a usar en el custom hook (Use CartContext) 
export const CartContext = createContext(); //creamos el contexto
export const useCartContext = () => useContext(CartContext); //exporto la funcion que usa el contexto