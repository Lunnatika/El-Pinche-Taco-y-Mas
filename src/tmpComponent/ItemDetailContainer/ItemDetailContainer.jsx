import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"; 

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({});
    
    const {id} = useParams();

    useEffect(() => {
        fetch(`https://6900ea90ff8d792314bbffb4.mockapi.io/product/${id}`)
        .then((res) => {
                if (!res.ok) {
                    throw new Error("No se encontro el producto");
            }
            return res.json();
        }) 
        .then((data) => setDetail(data))
        .catch((err) => console.log(err));
    }, [id]);
           
           

    return <main>
        {Object.keys(detail).length ? (
            <ItemDetail detail={detail} />
        ) : (
            <p>Cargando...</p>
        )}

    </main>;


};