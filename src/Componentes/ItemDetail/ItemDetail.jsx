
import { useCartContext } from "../../context/CartContext/CartContext.js";
import { Item } from "../Item/Item.jsx";

import { Count } from "../Count/Count.jsx";

export const ItemDetail = ({ detail }) => {
  const {addItem} = useCartContext (); //desestructuro la funcion del contexto
  
  const handleadd =(quantity) => {
    addItem ({...detail, quantity});
  } 
 
 
  return (
    <Item {...detail}>
      <Count btnText={"Agregar al carrito"} onConfirm ={handleadd} />
      
    </Item>
  );
};
