//componente que solo renderiza informacion
//Recibe por props una lista de productos
//Si la lista tiene productos, los mapea y por cada uno renderiza un Item
//Si la lista esta vacia, muestra un mensaje "No hay productos"
//Le envia a Item como <Item key={prod.id} {...prod}/>
import { Item } from "../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css"

export const ItemList=({list}) => {
    return(
        <>
        {/*  aqui comienza la logica de java script*/}
        <div className="productos-container">
            {list.length ? (
                list.map(prod => (
                    <Link to = {`/detail/${prod.id}`} key={prod.id} >
                        <Item {...prod}/>
                    </Link>
            ))
         ) : (
            <p> No hay productos</p>
        )}
        </div>
        </>

    );  
};