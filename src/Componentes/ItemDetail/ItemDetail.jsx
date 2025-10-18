
import { useCartContext } from "../../context/CartContext/CartContext";
import { Item } from "../Item/Item";
import { Boton } from "../Boton.jsx";

export const ItemDetail = ({ detail }) => {
  const {addItem} = useCartContext (); //desestructuro la funcion del contexto
  return (
    <Item {...detail}>
      <Boton
        texto={"Agregar al carrito"}
        onClick={() => { addItem(detail);

        }}
      >
  
      </Boton>
    </Item>
  );
};
