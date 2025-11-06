import { useEffect, useState} from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css"

export const ItemListContainer =({titulo}) => { //componente con logica , estados y llamadas a api o json local
    const[products, setProducts] = useState([]); //estado inicial vacio
    const {category} = useParams();


    useEffect(() => {
        fetch("/data/products.json")
            .then((res) => {    
                if(!res.ok){
                    throw new Error("Error en la llamada a la API");
                }
                return res.json();
            })
            .then((data) => {
                if(category){
                    setProducts(data.filter((prod) => prod.category === category));
                } else {
                    setProducts(data);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }, [category]); //el array vacio hace que se ejecute solo una vez al montar el componente.Agrego category para que se ejecute cada vez que cambie la categoria
    
    return(
        <section className="section-productos">
            <h1 className="degradado-mexico">{titulo}</h1>
            <ItemList list={products}/>

        </section>
    );
};