
import { useCartContext } from "../../context/CartContext/CartContext";
import { Item } from "../Item/Item";

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
