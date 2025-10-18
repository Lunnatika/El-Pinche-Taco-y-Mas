import { useEffect, useState} from "react";
import { ItemList } from "../ItemList/ItemList";
import "./ItemListContainer.css"


export const ItemListContainer =({titulo}) => { //componente con logica , estados y llamadas a api o json local
    const[products, setProducts] = useState([]); //estado inicial vacio


    useEffect(() => {
        fetch("/data/products.json")
        .then((res) => {    
            if(!res.ok){
                throw new Error("Error en la llamada a la API");
        }
            return res.json();
        })
        .then((data) => {
            setProducts(data);
        })
        .catch((err) => {
            console.log(err);
        });
    }, []); //el array vacio hace que se ejecute solo una vez al montar el componente
    
    return(
        <section className="section-productos">
            <h1 className="degradado-mexico">{titulo}</h1>
            <ItemList list={products}/>

        </section>
    );
};