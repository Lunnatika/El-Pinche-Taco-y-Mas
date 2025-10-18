//aqui va la exportacion de la funcion que usa el contexto
import { useContext } from "react";
import { CartContext } from "./CartContext"; //importo el contexto

export const useCartContext = () =>{
    return useContext(CartContext); //exporto la funcion que usa el contexto
}