import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";
import "./Nav.css";

export const Nav =() => {
    const {getTotalItems} = useCartContext(); //desestructuro la funcion del contexto

    return (
     <nav>
        <ul>
            <li>
                 <Link to={"/"}>Inicio </Link>
            </li>
            <li>
               <Link to="/category/tacos">Tacos</Link>
            </li>
            <li>
                <Link to="category/salsas">Salsas</Link>
            </li>
            <li>
                <Link to="category/tortillas">Tortillas</Link>
            </li>
            <li>
                <Link to={"/carrito"}>Carrito</Link>
                { getTotalItems() > 0 && ( //si hay items en el carrito, muestra la cantidad
                 <span className="in-cart">{getTotalItems()}</span>
                )}
            </li>

        </ul>

    </nav>
    );
};